import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";

interface Tag {
  tage: string;
}

interface NewArticleProps {
  title: string;
  description: string;
  body: string;
  tagList: Tag[];
}

const NewArticle: React.FC = ({}) => {
  const { register, handleSubmit, reset } = useForm<NewArticleProps>({});

  const onSubmit = (data: NewArticleProps) => {
    axios
      .post("https://api.realworld.io/api/articles", data)
      .then((response) => {
        console.log(JSON.stringify(response.data, null, 2));
      });
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    {...register("title")}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    name="title"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    {...register("description")}
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    name="description"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    {...register("body")}
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    name="body"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    {...register("tagList")}
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                    name="tagList"
                  />
                  <div className="tag-list"></div>
                </fieldset>
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit" >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;
