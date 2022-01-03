import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import Article, { ArticleProps } from "../ArticlePage/Article";

export interface ArticlesResponse {
  articles: ArticleProps[];
}

export interface User {
  username: string;
}

const ArticleList: React.FC<User> = ({ username }) => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    const query = username ? `username=${username}` : " ";
    const queryResult = query ? `?${query}` : " ";

    const url = "https://api.realworld.io/api/articles" + queryResult;

    axios.get<ArticlesResponse>(url).then((response) => {
      setArticles(response.data.articles);
    });
  }, [username]);

  if (!articles) return null;

  return (
    <Fragment>
      {articles.map((article) => (
        <Article
          key={article.id}
          id={article.id}
          body={article.body}
          description={article.description}
          tagList={article.tagList}
          updatedAt={article.updatedAt}
          title={article.title}
          author={article.author}
          slug={article.slug}
        ></Article>
      ))}
    </Fragment>
  );
};

export default ArticleList;
