import './style.css';

export const PostCard = ({ title, cover, body, id }) => (
    <div className="post">
        <img src={cover} alt={title} />
        <div className="content">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    </div>
);