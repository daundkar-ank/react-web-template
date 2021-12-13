import React from "react";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  const HandleForm = (e) => {
    e.preventDefault();

    const info = {
      email: document.getElementById("exampleInputEmail1").value,
      password: document.getElementById("exampleInputPassword1").value,
    };
    console.log(info);
    // let email, password;
    // email = document.getElementById("exampleInputEmail1").value;
    // password = document.getElementById("exampleInputPassword1").value;

    const Cred = JSON.parse(localStorage.getItem("key"));
    console.log(Cred);

    if (JSON.stringify(Cred) === JSON.stringify(info)) {
      history.replace("/gal");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="border border-primary rounded w-25 p-5">
        <form onSubmit={HandleForm}>
          <h4 className="text-center text-primary">Login</h4>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              className="form-control mb-3"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              className="form-control mb-3"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mx-2 ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
