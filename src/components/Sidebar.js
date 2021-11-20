import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import ImgBack from "../images/bg-wallpaper.jpg";
export const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={ImgBack} alt="max" />
        <Avatar className="sidebar__avatar" />
        <h2>Max Aakre</h2>
        <h4>maxaakre@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2.543</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2.440</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softeareengenering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};
