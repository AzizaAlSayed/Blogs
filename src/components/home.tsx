import Article, { ArticleProps } from "./article";
import axios from "axios";
import { useEffect, useState } from "react";

export async function get<T>(path: string): Promise<T> {
  const { data } = await axios.get(path);
  return data;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const url = "https://api.realworld.io/api/articles";

  const getData = async () => {
    const results = await get<ArticleProps>(url);
    setArticles([results]);
  };

  useEffect(() => {
    getData();
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
            <Article
              body="this is a body "
              description="this is a description "
              id={12}
              tagList={["tage1", "tag2"]}
              updatedAt={new Date()}
              title="thos is a title"
              key={12}
            ></Article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
