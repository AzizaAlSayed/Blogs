export interface ArticleProps {
    id: number;
    tagList: string[];
    updatedAt: Date;
    description: string;
    body: string;
    title: string;
    author: User;
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
  }) => {
    return (
      <div key={id} className="article-preview">
        <div className="article-meta">
          <a href="profile.html">
            <img src="http://i.imgur.com/Qr71crq.jpg" />
          </a>
          <div className="info">
            <a className="author">
              <p>{author.username}</p>
            </a>
            <span className="date">{updatedAt}</span>
          </div>
        </div>
        <a className="preview-link">
          <h1>{title}</h1>
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
  