import { useEffect, useState } from "react";
import Article, { ArticleProps } from "./article";
import axios from "axios";

interface ArticlesResponse {
  articles: ArticleProps[];
}

const Home: React.FC<{}> = () => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  console.log(articles);
  useEffect(() => {
    axios
      .get<ArticlesResponse>("https://api.realworld.io/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
      });
  }, []);

  if (!articles) return null;

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    Global Feed
                  </a>
                </li>
              </ul>
            </div>
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
              ></Article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
