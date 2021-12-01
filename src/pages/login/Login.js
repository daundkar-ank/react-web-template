import React from "react";

const Login = () => {
  return (
    <div>
      <form className="dropdown-menu p-4">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword2">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword2"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
