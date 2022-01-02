import axios from "axios";
import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleProps } from "./Article";
import Commnets, { CommentProps } from "./Comment";

const Articles: React.FC<{}> = () => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [article, setArticle] = useState<ArticleProps>();
  const params = useParams();
  const urlSlug = `https://api.realworld.io/api/articles/${params.slug}`;
  const urlComments = urlSlug + `/comments`;
  const slugRequest = axios.get(urlSlug);
  const commentsRequest = axios.get(urlComments);

  useEffect(() => {
    axios.all([slugRequest, commentsRequest]).then(
      axios.spread((...responses) => {
        setArticle(responses[0].data.article);
        setComments(responses[1].data.comments);
      })
    );
  }, [urlSlug, urlComments]);

  if (!article || !comments) return null;

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
            <p>{article.body}</p>
            <h2 id="introducing-ionic">{article.title}</h2>
            <p>{article.description}</p>
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
        {comments.map((comment) => (
          <Commnets
            key={comment.id}
            id={comment.id}
            body={comment.body}
            updatedAt={comment.updatedAt}
            author={comment.author}
            createdAt={comment.createdAt}
          ></Commnets>
        ))}
      </div>
    </div>
  );
};

export default Articles;
