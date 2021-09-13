import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import "./Sidebar.css";

export default function SideBar() {
  let clearLocal = async () => {
    localStorage.clear();
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://thumbs.dreamstime.com/b/food-delivery-logo-food-delivery-logo-vector-template-157000359.jpg" />
        <span>Food delivery</span>
      </div>
      <div className="content">
        <MenuItem icon="home" title="Dashboard" link="/dashboard" />
        <MenuItem icon="user" title="Users" link="/users" />
        <MenuItem icon="shopping-cart" title="Products" link="/shop" />
        <MenuItem icon="grid" title="Orders" link="/orders" />
        <Link onClick={clearLocal} className="h4" to="/register">
          Log out
        </Link>
      </div>
    </div>
  );
}