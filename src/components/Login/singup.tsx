import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Credentials {
  email: string;
  password: string;
}
const SignUp: React.FC<{}> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Credentials>({});

  const onLogin = (data: Credentials) => {
    axios
      .post("https://api.realworld.io/api/users/login", data)
      .then((response) => {
        console.log(JSON.stringify(response.data, null, 2));
      })
      .catch(function (error) {
        console.log(error);
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
                <label htmlFor="email"></label>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email")}
                />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="password"></label>
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

export default SignUp;
