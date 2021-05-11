import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";

import { AuthContext } from "../../../context/auth-context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              {authContext.isVerified ? (
                <div className="user-name__display">
                  <FontAwesomeIcon icon="user-circle" />
                  <span>{authContext.userName}</span>
                </div>
              ) : (
                <div className="user-name__display-warning">
                  <FontAwesomeIcon icon="exclamation-circle" />
                  <span>프로필 수정이 필요합니다</span>
                </div>
              )}
            </NavLink>
          )}
          {authContext.isLoggedIn && (
            <div>
              <button className="logout__btn" onClick={authContext.logout}>
                로그아웃
              </button>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
