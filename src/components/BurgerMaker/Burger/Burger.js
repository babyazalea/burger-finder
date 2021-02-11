import React from "react";

import { Container } from "react-bootstrap";
import "./Burger.scss";

import lidBunImage from "../../../assets/images/lid-bun-final.png";
import pattyImage from "../../../assets/images/patty-final.png";
import lettuceImage from "../../../assets/images/lettuce-final.png";
import cheeseImage from "../../../assets/images/cheese-final.png";

const Burger = (props) => (
  <Container className="burger">
    <div className="lid-bun">
      <img src={lidBunImage} alt="lid-bun" />
    </div>
    <div className="patty">
      <img src={pattyImage} alt="patty" />
    </div>
    <div className="lettuce">
      <img src={lettuceImage} alt="lettuce" />
    </div>
    <div className="cheese">
      <img src={cheeseImage} alt="cheese" />
    </div>
  </Container>
);

export default Burger;
