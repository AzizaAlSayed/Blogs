import axios, { AxiosRequestConfig } from "axios";
import { setDefaultResultOrder } from "dns";
import React, { useState } from "react";

interface Credentials {
  email: string;
  username: string;
  password: string;
}

const initialCredentials = {
  email: "",
  password: "",
  username: "",
};

const SignUp: React.FC = () => {
  const [error, setError] = useState("");
  const [credentials, setCredentials] =
    useState<Credentials>(initialCredentials);
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3) col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <form>
              <fieldset className="form-group">
                <label htmlFor="username"></label>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="username"
                  name="username"
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="email"></label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="email"
                  name="email"
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="password"></label>
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
