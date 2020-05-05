import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuth } from "@hyperjumptech/firebaseui-react-hook-hoc";
import { Link } from "react-router-dom";

function Dashboard({ auth }) {
  const { user, signout } = auth;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/about">About</Link>
        {user && (
          <div>
            <p>Hello, {user.displayName}</p>
            <button onClick={signout}>Sign out</button>
          </div>
        )}
      </header>
    </div>
  );
}

function SignInContainer({ children }) {
  return (
    <div
      style={{
        background: "yellow",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
}

export default withAuth(Dashboard, SignInContainer);
