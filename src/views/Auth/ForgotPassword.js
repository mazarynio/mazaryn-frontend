import React, { memo } from "react";
import { Form, Input } from "antd";
import "./Index.css";
import { login } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";

const ForgotPassword = memo((props) => {
  const [form] = Form.useForm();

  const onFinish = async () => {
    setIsOpened((wasOpened) => !wasOpened);
    isDone((wasOpened) => !wasOpened);
  };
  const [isOpened, setIsOpened] = useState(true);
  const [show, isDone] = useState(false);

  return (
    <div className="bg-lightgray">
      <div className="w-full flex flex-row">
        <div className="flex-initial auto custom_width">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/loginVector.svg"}
            alt="login"
          />
        </div>
        <div className=" flex-initial w-full ">
          <div className="bg-white custom_div">
            <div className="flex py-2 justify-end">
              <div className="mr-5">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white custom_text py-2 px-15 rounded-lg w-40"
                  onClick={() => props.history.push("/")}
                >
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-20 ">
            <div className="flex-initial w-1/2 max-w-md ">
              {isOpened && (
                <div className="container">
                  <h4 className="font-bold mb-4 text-xl page-name">
                    Reset Your Password
                  </h4>
                  <div className="mb-5">
                    <span className="subtitle ">
                      To request a new password, enter your email{" "}
                    </span>
                  </div>

                  <Form
                    form={form}
                    layout="vertical"
                    autoComplete="off"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      label={
                        <label className="custom_label">Enter your email</label>
                      }
                      name="Your email address"
                      rules={[
                        {
                          type: "email",
                          message: "Please type a valid email",
                        },
                        {
                          message: "Please input your email",
                        },
                      ]}
                    >
                      <Input placeholder="Your email address" />
                    </Form.Item>

                    <div className="flex flex-row items-center gap-10">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white custom_text  h-10 px-15 rounded-lg w-40	"
                        type="submit"
                      >
                        Continue
                      </button>
                    </div>
                  </Form>
                </div>
              )}
              {show && (
                <div className="container">
                  <h4 className="font-bold mb-4 text-xl page-name">
                    Password Reset Email Sent{" "}
                  </h4>
                  <div className="mb-5">
                    <span className="subtitle ">
                      {" "}
                      We have sent an unlock code to your registered email
                      address.{" "}
                    </span>
                  </div>
                  <div className="flex flex row items-center justify-center mt-10">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/images/mail.svg"}
                      alt="mail"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default connect(null, { login })(ForgotPassword);
