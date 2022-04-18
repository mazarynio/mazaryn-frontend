import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";

//icons
import {
  SearchIcon,
  NotificationIcon,
  ChevronDownIcon,
} from "../Icons/SvgIcons";

//styles
import "./header.css";

//images
import { logo, profileImage, mazaryn } from "../../assets";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="header" className="z-50">
      <header>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="w-1/2">
          <Input
            className="search-input"
            placeholder="Search"
            prefix={<SearchIcon />}
          />
        </div>
        <div className="flex justify-between items-center w-1/4">
          <div
            className="flex justify-between items-center p-2.5 bg-lightgray"
            style={{ borderRadius: "10px" }}
          >
            <div
              className="mr-3"
              style={{
                width: 20,
                height: 20,
                objectFit: "cover",
              }}
            >
              <img
                className="rounded-full mr-3"
                src={mazaryn}
                alt="balance"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <span>0.23</span>
          </div>
          <div className="rounded-full bg-lightgray p-1.5 ">
            <NotificationIcon />
          </div>
          <div
            className="flex justify-between items-center bg-lightgray cursor-pointer"
            style={{ paddingRight: "10px", borderRadius: "10px" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={profileImage}
              alt="profile"
              className="rounded-full mr-3"
              style={{ width: 40, height: 40 }}
            />
            <span className="mr-3" style={{ color: "#585858" }}>
              Auwal Rg
            </span>
            <div className="">
              <ChevronDownIcon />
            </div>
          </div>
        </div>
      </header>
      {isOpen ? (
        <div className="flex justify-end  mr-14">
          <div className="card ">
            <div className="flex  items-center">
              <img
                src={profileImage}
                alt="profile"
                className="rounded-full mr-3"
                style={{ width: 40, height: 40 }}
              />
              <div>
                <span className="mr-3 name">Abubakar</span>
                <br />
                <span className="mr-3 username" style={{ color: "#585858" }}>
                  @Auwalrg
                </span>
              </div>
            </div>
            <div className="divider py-2"></div>

            <div className="mt-3">
              <Link to="/login" style={{ color: "black" }}>
                <button>Log Out</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
