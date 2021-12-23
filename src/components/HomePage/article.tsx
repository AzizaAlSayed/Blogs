import { Link } from "react-router-dom";

export interface ArticleProps {
  id: number;
  tagList: string[];
  updatedAt: Date;
  description: string;
  body: string;
  title: string;
  author: User;
  slug: string;
}

interface User {
  username: string;
}
const Article: React.FC<ArticleProps> = ({
  id,
  updatedAt,
  tagList,
  description,
  body,
  title,
  author,
  slug,
}) => {
  return (
    <div key={id} className="article-preview">
      <div className="article-meta">
        <a href="">
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </a>
        <div className="info">
          <a href="" className="author">
            <p>{author.username}</p>
          </a>
          <span className="date">{updatedAt}</span>
        </div>
      </div>
      <a className="preview-link">
        <Link to="/Create-a-new-implementation-1">
          <h1>{title}</h1>
        </Link>
        <p>{description}</p>
        <span>{body}</span>
      </a>
      <div className="col-md-3">
        <div className="sidebar">
          <p>Popular Tags</p>
          <div className="tag-list">{tagList.join(" ")}</div>
        </div>
      </div>
    </div>
  );
};

export default Article;
