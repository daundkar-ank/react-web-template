import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <form className="dropdown-menu p-4">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">User Name</label>
          <input type="text" className="form-control" placeholder="User Name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword2">Password</label>
          <input
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            id="exampleDropdownFormPassword2"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword2">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword3"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="form-check-input"
            id="dropdownCheck2"
          />
          <label className="form-check-label" htmlFor="dropdownCheck2">
            Remember me
          </label>
        </div>
        <button type="submit" value="Submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
