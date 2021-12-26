import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Commnets, { CommentProps } from "./comment";

interface CommentsResponse {
  comments: CommentProps[];
}

const Articles: React.FC<{}> = () => {
  const params = useParams();
  const url = `https://api.realworld.io/api/articles/${params.slug}/comments`;
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    axios.get<CommentsResponse>(url).then((response) => {
      setComments(response.data.comments);
    });
  }, []);

  if (!comments) return null;

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>How to build webapps that scale</h1>
          <div className="article-meta">
            <a href="">
              <img src="http://i.imgur.com/Qr71crq.jpg" />
            </a>
            <div className="info">
              <a href="" className="author"></a>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Eric Simons <span className="counter">(10)</span>
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
            <a href="profile.html">
              <img src="http://i.imgur.com/Qr71crq.jpg" />
            </a>
            <div className="info">
              <a href="" className="author">
                Eric Simons
              </a>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
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
      </div>
    </div>
  );
};

export default Articles;
