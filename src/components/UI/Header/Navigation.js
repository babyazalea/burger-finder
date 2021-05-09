import React, { useContext } from "react";

import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../../context/auth-context";

import "./Navigation.css";

const Navigation = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <Navbar expand="lg">
      <Navbar.Brand variant="dark">
        <NavLink className="nav-link__home" to="/">
          햄버거를 찾아서
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-links__burger">
          <NavLink to="/burger-maker">버거만들기</NavLink>
          <NavLink to="/credits">크레딧</NavLink>
        </Nav>
        <Nav className="nav-links__auth">
          {!authContext.isLoggedIn && (
            <NavLink to="/auth">로그인 / 가입</NavLink>
          )}
          {authContext.isLoggedIn && (
            <NavLink
              to={`/users/${authContext.userId}`}
              className="nav-link__user-profile"
            >
              <div className="user-name__display">{authContext.userName}</div>
            </NavLink>
          )}
          {authContext.isLoggedIn && (
            <button className="logout__btn" onClick={authContext.logout}>
              로그아웃
            </button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
