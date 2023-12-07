// React
import React from "react";

// React DOM
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink style={{margin:"0 10px"}} to={'/'}>Home</NavLink>
      <NavLink to={'/basket'}>Basket</NavLink>
    </div>
  );
};

export default Header;
