import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Link to="/">React SSR</Link>
      </div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
        }}
      >
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/admins">Admins</Link>
        </li>
        {authButton}
      </ul>
    </nav>
  );
};

export default connect(mapStateToProps)(Header);

function mapStateToProps({ auth }) {
  return { auth };
}
