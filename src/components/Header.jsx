import React from "react";
import investmentCalculator from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={investmentCalculator} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
