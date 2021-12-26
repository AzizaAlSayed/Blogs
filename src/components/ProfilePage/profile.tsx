import { useParams } from "react-router-dom";

const Profile: React.FC<{}> = () => {
  const params = useParams();
  const url = `https://api.realworld.io/api/profiles/${params.username}`;
  return (
    <div className="ng-scope">
      <div className="profile-page ng-scope">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img
                  ng-src="https://api.realworld.io/images/demo-avatar.png"
                  className="user-img"
                  src="https://api.realworld.io/images/demo-avatar.png"
                />
                <h4 ng-bind="::$ctrl.profile.username" className="ng-binding">
                  {params.username}
                </h4>
                <button
                  className="btn btn-sm action-btn ng-binding btn-outline-secondary"
                  ng-class="{ 'disabled': $ctrl.isSubmitting,
              'btn-outline-secondary': !$ctrl.user.following,
              'btn-secondary': $ctrl.user.following }"
                  ng-click="$ctrl.submit()"
                >
                  <i className="ion-plus-round"></i>
                  &nbsp; Follow Gerome
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      My Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="">
                      Favorited Articles
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
