import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Credentials {
  email: string;
  username: string;
  password: string;
}

interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
  password: string;

}

interface CredentialsProps {
  credential: User;
}

const initialCredentials = {
  email: "",
  password: "",
  username: "",
};

const SignUp: React.FC = () => {
  const [credentials, setCredentials] =
    useState<Credentials>(initialCredentials);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Credentials>({});

  const onSiginUp = (data: Credentials) => {
    axios
      .post<CredentialsProps>("https://api.realworld.io/api/users", data)
      .then((response) => {
        console.log(JSON.stringify(response.data, null, 2));
        setCredentials(response.data.credential);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data + error.response.status);
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
            <h1 className="text-xs-center">Sign up</h1>
            <form onSubmit={handleSubmit(onSiginUp)}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="username"
                  name="username"
                  {...register("username")}
                />
              </fieldset>
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
                <label htmlFor="password"></label>
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password")}
                />
              </fieldset>
              {errors.password && errors.email && errors.username && (
                <p>This field is required</p>
              )}
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
