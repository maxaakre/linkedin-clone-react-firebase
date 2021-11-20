import React from "react";
import "./Header.css";
import Home from "@material-ui/icons/Home";
import SuperVisor from "@material-ui/icons/SupervisorAccount";
import BusinessCeterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ImgMax from "./icons/max.png";

import { HeaderOption } from "./HeaderOption";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <i className="fab fa-linkedin"></i>
        <div className="header__search">
          <i className="fas fa-search"></i>

          <input type="text"></input>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SuperVisor} title="My Network" />
        <HeaderOption Icon={BusinessCeterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption title="me" />
      </div>
    </div>
  );
};
