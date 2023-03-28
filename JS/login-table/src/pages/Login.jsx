import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  return (
    <div className="login">
      <form>
        <label className="label">Username</label>
        <input className="input" placeholder="name"></input>
        <label className="label">Password</label>
        <input className="input" placeholder="password"></input>
        <Link to={"/home"}>
          <button type="submit" className="button">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
