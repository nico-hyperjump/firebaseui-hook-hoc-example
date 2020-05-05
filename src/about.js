import React from "react";
import "./App.css";
import { useAuth } from "@hyperjumptech/firebaseui-react-hook-hoc";
import { Link } from "react-router-dom";

function About() {
  const { user, signout, isChecking, SignInComponent } = useAuth();
  return (
    <div className="App">
      <header className="App-header">
        {user && (
          <div>
            <h1>About Page</h1>
            <p>Hello, {user.displayName}</p>
            <button onClick={signout}>Sign out</button>
            <div>
              <Link to="/">Home</Link>
            </div>
          </div>
        )}
        {!user && !isChecking && SignInComponent}
      </header>
    </div>
  );
}

export default About;
