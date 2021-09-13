import React from "react";
import "./MenuItem.css";
import FeatherIcon from "feather-icons-react";
import { useLocation, withRouter } from "react-router";

function MenuItem({ icon = "", title = "", history, link }) {
  let location = useLocation();
  let onPress = () => {
    history.push(link);
  };
  return (
    <div
      className={location.pathname === link ? "menu-item active" : "menu-item"}
      onClick={onPress}
    >
      <FeatherIcon icon={icon} />
      <span>{title}</span>
    </div>
  );
}

export default withRouter(MenuItem);