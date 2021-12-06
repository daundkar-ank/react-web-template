import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const getData = () => {
  let auth = localStorage.getItem("data");

  if (auth) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpwd, setConfirmpwd] = useState("");
  const [checked, setChecked] = useState("");

  const [user, setUser] = useState(getData());
  const history = useHistory();

  const HandleForm = (e) => {
    e.preventDefault();

    const newUser = { email: email, password: password, confirmpwd: confirmpwd };

    setUser([...user, newUser]);
    console.log(user);
    history.replace("/login");
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user));
  }, [user]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="border border-primary rounded w-25 p-3">
        <form onSubmit={HandleForm}>
          <h4 className="text-center text-primary">Sign up</h4>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              value={email}
              className="form-control mb-3"
              id="exampleInputEmail1"
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              className="form-control mb-3"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"> Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              autoComplete="off"
              value={confirmpwd}
              onChange={(e) => setConfirmpwd(e.target.value)}
              className="form-control mb-2"
              id="exampleInputPassword2"
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label
              className="form-check-label mb-3"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              htmlFor="exampleCheck1">
              Remember Me
            </label>
          </div>
          <div className="text-center">
            <button type="submit" value="Submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
