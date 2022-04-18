import React from "react";
import { Link, useHistory } from "react-router-dom";

//images
import { profileImage } from "../../assets";

//icons
import {
  HomeIcon,
  ChatIcon,
  UserFriendsIcon,
  SettingsIcon,
  WalletIcon,
  MyProductsIcon,
  OffersIcon,
  JobsIcon,
  MarketPlaceIcon,
  PagesIcon,
} from "../Icons/SvgIcons";

//styles
import "./LeftPane.css";

function LeftPane(props) {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("auth_token");
    props.history.push("/login");
  };

  return (
    <div
      className="h-full flex flex-col"
      style={{
        padding: "0% 3%",
        width: "27%",
        paddingTop: "6rem",
        paddingBottom: "5rem",
      }}
    >
      <nav
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
      </nav>

      <nav
        style={{
          marginTop: "2rem",
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
          <Link to="/wallet">
            <li className="flex mb-4 items-center">
              <WalletIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/wallet"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                Wallet
              </span>
            </li>
          </Link>
          <Link to="/my-products">
            <li className="flex mb-4 items-center">
              <MyProductsIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/my-products"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                My Products
              </span>
            </li>
          </Link>
          <Link to="/profile">
            <li className="flex items-center ">
              <img
                src={profileImage}
                alt="profile"
                className="rounded-full"
                style={{
                  width: "20px",
                  height: "20px",
                  border:
                    history.location.pathname === "/profile" &&
                    "2px solid #4385F5",
                }}
              />
              <span
                style={{
                  color:
                    history.location.pathname === "/profile"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                @auwalrg
              </span>
            </li>
          </Link>
        </ul>
      </nav>

      <span
        className="self-start"
        style={{ fontSize: "20px", color: "#AAAAAA", marginTop: "2rem" }}
      >
        Explore
      </span>

      <nav
        style={{
          marginTop: "2rem",
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
          <Link to="/offers">
            <li className="flex mb-4 items-center">
              <OffersIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/offers"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                Offers
              </span>
            </li>
          </Link>
          <Link to="/jobs">
            <li className="flex mb-4 items-center">
              <JobsIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/jobs"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                Jobs
              </span>
            </li>
          </Link>
          <Link to="/marketplace">
            <li className="flex mb-4 items-center">
              <MarketPlaceIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/marketplace"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                Marketplace
              </span>
            </li>
          </Link>
          <Link to="/pages">
            <li className="flex items-center">
              <PagesIcon />
              <span
                style={{
                  color:
                    history.location.pathname === "/pages"
                      ? "#4385F5"
                      : "#5D5F63",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginLeft: "1rem",
                }}
              >
                Pages
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default LeftPane;
