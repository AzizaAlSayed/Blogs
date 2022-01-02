import React, { Fragment } from "react";

export interface User {
  username: string;
}

export interface CommentProps {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: User;
}

const Commnets: React.FC<CommentProps> = ({
  createdAt,
  updatedAt,
  body,
  id,
  author,
}) => {
  return (
    <Fragment>
      <div className="article-page">
        <div className="container page">
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <div key={id} className="card">
                <div className="card-block">
                  <p className="card-text">{body}</p>
                </div>
                <div className="card-footer">
                  <a href="" className="comment-author">
                    <img
                      src="http://i.imgur.com/Qr71crq.jpg"
                      className="comment-author-img"
                    />
                  </a>
                  &nbsp;
                  <a href="" className="comment-author">
                    {author.username}
                  </a>
                  <span className="date-posted">
                    {updatedAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Commnets;
