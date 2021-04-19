import React from "react";

import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

import "./Navigation.css";

const Navigation = (props) => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">햄버거를 찾아서</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/burger-maker">버거만들기</Nav.Link>
          <Nav.Link href="/credits">크레딧</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/auth">로그인 / 가입</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
