import Article from "./article";

const Home: React.FC = () => {
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
              updatedAt={new Date}
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
