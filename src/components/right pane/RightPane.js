import React from "react";
import { Link } from "react-router-dom";
import Adsense from 'react-adsense';

//antd
import { Progress } from "antd";
import { CheckAll, FlameIcon, UserFriendsIcon } from "../Icons/SvgIcons";
import CustomCard from "./custom card/CustomCard";

function RightPane(props) {
  return (
    <div
      className="h-full flex flex-col "
      style={{
        padding: "0% 3%",
        width: "34%",
        paddingTop: "6rem",
        paddingBottom: "5rem",
      }}
    >
      <div
        className="flex flex-col"
        style={{
          background: "white",
          width: "100%",
          borderRadius: "20px",
          boxShadow: "0px 10px 20px rgba(112, 144, 176, 0.12)",
          padding: "26px 30px",
        }}
      >
        <span className="self-start text-base" style={{ fontWeight: "bold" }}>
          Complete your profile
        </span>
        <hr
          style={{
            backgroundColor: "#C5C7C8",
            width: "100%",
            margin: "1rem 0rem",
          }}
        />
        <Progress
          percent={45}
          showInfo={false}
          strokeColor="#4385F5"
          trailColor="#C4C4C4"
          size="small"
        />
        <span
          className="flex items-center font-semibold text-base mb-6 self-start mt-4"
          style={{ color: "#C5C7C8" }}
        >
          Verify your email
          <div className="ml-3">
            <CheckAll />
          </div>
        </span>

        <span
          className="font-semibold text-base mb-6 self-start"
          style={{ color: "#5D5F63" }}
        >
          Set your username
        </span>
        <span
          className="font-semibold text-base  self-start"
          style={{ color: "#5D5F63" }}
        >
          Set your profile picture
        </span>
      </div>
      <CustomCard
        name="Trending"
        icon={<FlameIcon />}
        buttonName="Follow"
        cardType="trending"
      />
      <Adsense.Google 
        client="ca-pub-5924558149384541"
        slot="3327381621"
        format="auto"
        responsive="true"
        style={{display:"block"}}
      />
      <CustomCard
        name="Friend suggestion "
        icon={<UserFriendsIcon color width={30} height={24} />}
        buttonName="Add"
        cardType="friend-suggestion"
      />
      <CustomCard
        name="Groups"
        icon={<UserFriendsIcon color width={30} height={24} />}
        buttonName="Join"
        cardType="groups"
      />
      <amp-ad width="100vw" height="320"
        type="adsense"
        data-ad-client="ca-pub-5924558149384541"
        data-ad-slot="3327381621"
        data-auto-format="rspv"
        data-full-width="">
        <div overflow=""></div>
      </amp-ad>
    </div>
  );
}

export default RightPane;
{
  /* <nav
        style={{
          display: "flex",
          justifyContent: "start",
          background: "white",
          width: "100%",
          borderRadius: "20px",
          boxShadow: "0px 10px 20px rgba(112, 144, 176, 0.12)",
          padding: "26px 30px",
        }}
      >
        <ul>
          <Link to="/">
            <li className="flex mb-4 items-center">
              <HomeIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/" ? "#4385F5" : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                Home
              </span>
            </li>
          </Link>
          <Link to="/chat">
            <li className="flex mb-4 items-center">
              <ChatIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/chat"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                Chat
              </span>
            </li>
          </Link>
          <Link to="/group">
            <li className="flex mb-4 items-center">
              <UserFriendsIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/group"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                Group
              </span>
            </li>
          </Link>
          <Link to="/settings">
            <li className="flex items-center">
              <SettingsIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/settings"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                Settings
              </span>
            </li>
          </Link>
        </ul>
      </nav> */
}
