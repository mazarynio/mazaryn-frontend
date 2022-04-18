import React, { memo } from "react";
import { Form, Input, Checkbox } from "antd";
import "./Index.css";
import { connect } from "react-redux";
import { signUp } from "../../redux/actions";

const SignUp = memo((props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    delete values["password2"];
    const response = await props.signUp(values)
    if (response?.status === 'successStatus') {
      props.history.push("/interest");
    }
   
  };
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <div className=" bg-lightgray  ">
      <div className="w-full flex flex-row ">
        <div className=" flex-initial w-2/5 ">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/loginVector.svg"}
            alt="login"
          />
        </div>
        <div className=" flex-initial w-3/5  login-card flex flex-col  mt-32 items-center">
          <div className="flex-initial w-1/2 max-w-md">
            <div className="container">
              <h4 className="font-bold mb-7 text-xl page-name">Sign Up</h4>

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
                  label={<label className="custom_label">Email*</label>}
                  name="email"
                  rules={[
                    {
                      message: "Please insert your email",
                    },
                    {
                      type: "email",
                      message: "Please type a valid email",
                    },
                  ]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                  label={<label className="custom_label">Password*</label>}
                  name="password"
                  rules={[
                    {
                      message: "Please insert your password",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || value.length >= 8) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error(
                            "The password must contain atleast 8 characters"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input placeholder="Password" type="password" />
                </Form.Item>

                <Form.Item
                  label={
                    <label className="custom_label">Confirm Password*</label>
                  }
                  name="password2"
                  rules={[
                    {
                      message: "Please insert your password",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }

                        return Promise.reject(
                          new Error("The passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input placeholder="Confirm Password" type="password" />
                </Form.Item>
                <div className="my-8">
                  <Checkbox onChange={onChange}>
                    {" "}
                    <span className="custom_checkbox">
                      Agree to our terms of service
                    </span>{" "}
                  </Checkbox>
                </div>
                <div className="flex flex-row items-center gap-10">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white custom_text  h-10 px-15 rounded-lg w-40		"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <div>
                    <p
                      className="text-primary cursor-pointer custom_text"
                      onClick={() => props.history.push("/login")}
                    >
                      Login
                    </p>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default connect(null, { signUp })(SignUp);
