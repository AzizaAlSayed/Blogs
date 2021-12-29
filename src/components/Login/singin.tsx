import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
const SignIn: React.FC<{}> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Credentials>({});

  const onLogin = (data: Credentials) => {
    axios
      .post<User>("https://api.realworld.io/api/users/login", data)
      .then((response) => {
        console.log(JSON.stringify(response.data, null, 2));
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data + error.response.status);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3) col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <form onSubmit={handleSubmit(onLogin)}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email")}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password")}
                />
              </fieldset>
              {errors.email && errors.email && (
                <span>This field is required</span>
              )}
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                onClick={() => reset()}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
