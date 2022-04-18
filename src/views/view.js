import React from "react";
import "./view.css";
import Header from "../components/header/Header";
import LeftPane from "../components/left pane/LeftPane";
import RightPane from "../components/right pane/RightPane.js";
import Posts from "../components/middle pane/post/Posts";
import Profile from "../components/middle pane/profile/Profile";
import Feed from "../components/middle pane/feed/Feed";
import PrivateRoute from "../components/showTosts/guards/ProtectedRoutes";
import Notification from "../components/middle pane/notification";
import Wallet from "../components/middle pane/wallet";
import Settings from "../components/middle pane/settings";
import Interest from "../components/middle pane/interest";

function View(props) {
  return (
    <div id="view">
      <Header />
      <div className="section">
        <LeftPane />
        <section id="middle" className=" min-w-min">
          <PrivateRoute exact path="/" component={Feed} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/group" component={Posts} />
          <PrivateRoute exact path="/notifications" component={Notification} />
          <PrivateRoute exact path="/interest" component={Interest} />
          <PrivateRoute exact path="/settings" component={Settings} />
          <PrivateRoute exact path="/wallet" component={Wallet} />
        </section>
        <RightPane history={props.history} />
      </div>
    </div>
  );
}

export default View;
