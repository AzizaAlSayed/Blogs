import { Link } from "react-router-dom";

export interface ArticleProps {
  id: number;
  tagList: string[];
  updatedAt: string;
  description: string;
  body: string;
  title: string;
  author: User;
  slug: string;
}

export interface User {
  username: string;
  img: string;
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
        <a>
          <img src={author.img} />
        </a>
        <div className="info">
          <a className="author">
            <p>{author.username}</p>
          </a>
          <span className="date">{updatedAt}</span>
        </div>
      </div>
      <a className="preview-link">
        <Link to={`articles/${slug}`}>
          <h1>{title}</h1>
          <p>{description}</p>
          <span>{body}</span>
        </Link>
      </a>
      <div>
        {tagList.map((tag) => (
          <a className="tag-pill tag-default">{tag}</a>
        ))}
      </div>
    </div>
  );
};

export default Article;
