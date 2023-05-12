import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImg from "../img/meals (1).jpg";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowModal={props.onShowModal} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table of food" />
      </div>
    </React.Fragment>
  );
}

export default Header;
