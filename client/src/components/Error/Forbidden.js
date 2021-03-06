import React from "react";
import { Link, useLocation } from "react-router-dom";

const Forbidden = ({ context }) => {
  //Create location reference
  let location = useLocation();

  return (
    <div className="wrap">
      <h2>Forbidden</h2>
      <p>Oh oh! You can't access this content</p>
      <p>
        This means you either need to sign in or you don't have permission to be
        here
      </p>
      <div>
      {context.authenticatedUser ? null : (
          <Link
            className="button"
            style={{ marginRight: "10px", marginBottom: "10px" }}
            to={{
              pathname: "/signin",
              state: {
                from: location /* record location to send user back to after sign in */,
              },
            }}
          >
            Sign In
          </Link>
        )}
        <Link className="button button-secondary" to="/">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
