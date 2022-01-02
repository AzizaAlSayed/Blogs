import axios, { AxiosRequestConfig } from "axios";
import React, { useState } from "react";

interface Credentials {
  email: string;
  password: string;
}

interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

const initialCredentials = {
  email: "",
  password: "",
};

const Login: React.FC<{}> = () => {
  const [error, setError] = useState("");
  const [credentials, setCredentials] =
    useState<Credentials>(initialCredentials);

  const handleReset = () => {
    setCredentials({ email: "", password: "" });
  };

  const login: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const response = await onLogin(credentials);
    if (response && response.error) {
      setError(response.error);
    }
  };

  const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
      method: "post",
      url: "https://api.realworld.io/api/users/login",
      data: { user: data },
    };
    try {
      const { data: response } = await axios.request<User>(requestConfig);
    } catch (error: any) {
      setError(error.response);
      return { error: error.response.data.message };
    }
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <form onSubmit={login}>
              <fieldset className="form-group">
                <label htmlFor="email"></label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  value={credentials.email}
                  onChange={(event) =>
                    setCredentials({
                      email: event.target.value,
                      password: credentials.password,
                    })
                  }
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="password"></label>
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  value={credentials.password}
                  onChange={(event) =>
                    setCredentials({
                      email: credentials.email,
                      password: event.target.value,
                    })
                  }
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                onClick={handleReset}
              >
                Sign in
              </button>
              {error && (
                <p className="error-messages">
                  Username or password is invalid
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;