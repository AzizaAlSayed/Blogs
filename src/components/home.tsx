import Article, { ArticleProps } from "./article";

export interface Article {
  ArticleList: ArticleProps[];
}
const Home: React.FC<Article> = ({ ArticleList }) => {
  if (!ArticleList) return null;

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
            {ArticleList.map((article) => (
              <Article
                key={article.id}
                id={article.id}
                body={article.body}
                description={article.description}
                tagList={article.tagList}
                updatedAt={article.updatedAt}
                title={article.title}
              ></Article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
