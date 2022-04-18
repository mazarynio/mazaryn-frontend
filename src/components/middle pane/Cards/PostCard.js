import { useState } from "react";
import { Input } from "antd";
import "../feed/Feed.css";
import { profileImage } from "../../../assets";

import {
  Pictures,
  FluentEmoji,
  HashTag,
  ChevronDownIcon,
  World,
} from "../../Icons/SvgIcons";

const { TextArea } = Input;
const onChange = e => {
  console.log('Change:', e.target.value);
};

const PostCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);




  return (
    <>
      <div className="container">
        <div className="flex flex-row align-center ">
          <img
            src={profileImage}
            alt="profile"
            className="rounded-full mr-3"
            style={{ width: 40, height: 40 }}
          />
          <TextArea placeholder="Type something" bordered={false} onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer' }} />
        </div>
        <div className="flex justify-between items-center mt-10 ">
          <div className="flex ">
            <div className="mr-5 icons">
              <FluentEmoji />
            </div>
            <div className="mr-5 icons">
              <HashTag />
            </div>
            <div className="mr-5 icons">
              <Pictures />
            </div>
            <div>
            <div className="bg-lightgray w-32 h-10 rounded-xl flex items-center justify-center">
              <div>
                <World />
              </div>

              <div className="px-2">Everyone</div>
              <div>
                <ChevronDownIcon />
              </div>
            </div>
          </div>
          {isOpen ? (
         <div>
           loremmmmmmmmmmmmmmmmmmmmmmmm
         </div>
      ) : (
        ""
      )}
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white  h-10 px-15 rounded-lg w-24">
            Post
          </button>
        </div>

      </div>


      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-row align-center p-6 ">
                  <img
                    src={profileImage}
                    alt="profile"
                    className="rounded-full mr-3"
                    style={{ width: 40, height: 40 }}
                  />
                  <TextArea placeholder="Type something" bordered={false} onClick={() => setShowModal(true)}
                    style={{ cursor: 'pointer' }} />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-screen">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">


                  </p>
                </div>
                {/*footer*/}
                <div className="flex justify-between items-center mt-10 p-6 ">
                  <div className="flex ">
                    <div className="mr-5 icons">
                      <FluentEmoji />
                    </div>
                    <div className="mr-5 icons">
                      <HashTag />
                    </div>
                    <div className="mr-5 icons">
                      <Pictures />
                    </div>
                    <div className="bg-lightgray w-32 h-10 rounded-xl flex items-center justify-center cursor-pointer" >
                      <div>
                        <World />
                      </div>

                      <div className="px-2">Everyone</div>
                      <div>
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white  h-10 px-15 rounded-lg w-24">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

  );
};

export default PostCard;
