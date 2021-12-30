import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleProps } from "../HomePage/Article";

interface ArticleResult {
  article: ArticleProps;
}

const ArticlePage: React.FC<{}> = () => {
  const [article, setArticle] = useState<ArticleProps>();
  const params = useParams();

  useEffect(() => {
    const url = `https://api.realworld.io/api/articles/${params.slug}`;
    axios.get<ArticleResult>(url).then((response) => {
      setArticle(response.data.article);
    });
  }, []);

  if (!article) return null;

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>How to build webapps that scale</h1>
          <div className="article-meta">
            <a>
              <img src={article.author.img} />
            </a>
            <div className="info">
              <a className="author">{article.author.username}</a>
              <span className="date">{article.updatedAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {article.author.username}
              <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>
              Web development technologies have evolved at an incredible clip
              over the past few years.
            </p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>It's a great solution for learning how other frameworks work.</p>
          </div>
        </div>
        <hr />
        <div className="article-actions">
          <div className="article-meta">
            <a>
              <img src={article.author.img} />
            </a>
            <div className="info">
              <a className="author">{article.author.username}</a>
              <span className="date">{article.updatedAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {article.author.username}
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
