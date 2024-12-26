import { Component } from 'react';

import './style.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPage: 2,
    search: ''
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postPage),
      allPosts: postsAndPhotos,
    });
  }

  loadaMore = () => {
    const {
      page,
      postPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ search: value })
  }

  render() {
    const { posts, page, postPage, allPosts, search } = this.state;
    const noMorePosts = page + postPage >= allPosts.length;

    const filterPosts = !!search ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          search.toLocaleLowerCase()
        );
      })
      : posts;

    return (
      <section className="container">
        {!!search && (
          <h1>Search Value = {search}</h1>
        )}
        <TextInput searchValue={search} handleChange={this.handleChange} />
        <div className="search-container"></div>


        {filterPosts.length > 0 && (
          <Posts posts={filterPosts} />
        )}

        {filterPosts.length === 0 && (
          <p>Não existem posts</p>
        )}

        <div className="button-container">
          {!search && (

            <Button
              disabled={noMorePosts}
              text="Load More"
              onClick={this.loadaMore} />
          )}
        </div>
      </section>
    );
  }
}


export default Home;
