import React from "react";
import "./App.css";
import { useAuth } from "@hyperjumptech/firebaseui-react-hook-hoc";
import { Link } from "react-router-dom";

function About() {
  const { user, signout, isChecking, SignInComponent } = useAuth();
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Page</h1>
        <Link to="/">Home</Link>
        {user && (
          <div>
            <p>Hello, {user.displayName}</p>
            <button onClick={signout}>Sign out</button>
            <div></div>
          </div>
        )}
        {!user && !isChecking && SignInComponent}
      </header>
    </div>
  );
}

export default About;
