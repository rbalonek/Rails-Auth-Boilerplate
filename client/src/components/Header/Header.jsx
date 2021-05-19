import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Header(props) {
  let history = useHistory();
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <h1 className="banner">
        <Link className="banner__text" to="/">
          User Auth
        </Link>
      </h1>
      <div>
        {currentUser ? (
          <>
            <p>User: {currentUser.username}</p>
            <button className="btn btn__primary" onClick={handleLogout}>
              logout
            </button>
          </>
        ) : (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link to="/login">
              <button className="btn btn__primary">Login</button>
            </Link>
            <button
              onClick={() => history.push("/register")}
              className="btn btn__secondary"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
