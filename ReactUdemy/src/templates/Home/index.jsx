import { useEffect, useState, useCallback } from 'react';

import './style.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState([]);
  const [postPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postPage >= allPosts.length;

  const filterPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLocaleLowerCase()
      );
    })
    : posts;

  const handleLoadPosts = useCallback(async (page, postPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postPage));
    setAllPosts(postsAndPhotos);
  })

  useEffect(() => {
    handleLoadPosts(0, postPage);
  }, [handleLoadPosts, postPage]);

  const loadaMore = () => {
    const nextPage = page + postPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }


  return (
    <section className="container" >
      {!!searchValue && (
        <h1>Search Value = {searchValue}</h1>
      )}
      <TextInput searchValue={searchValue} handleChange={handleChange} />
      <div className="search-container"></div>


      {
        filterPosts.length > 0 && (
          <Posts posts={filterPosts} />
        )
      }

      {
        filterPosts.length === 0 && (
          <p>Não existem posts</p>
        )
      }

      <div className="button-container">
        {!searchValue && (

          <Button
            disabled={noMorePosts}
            text="Load More"
            onClick={loadaMore} />
        )}
      </div>
    </section >
  );
}
export default Home;