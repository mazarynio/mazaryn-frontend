import React, { memo } from 'react';
import { Form, Input } from 'antd';
import './Index.css'
import { login } from '../../redux/actions';
import { connect } from 'react-redux';

const Login = memo((props) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
     const response = await props.login(values)
      if (response?.status === 'successStatus') {
        props.history.push('/');
        window.location.reload(); 

      }
    
  };

  return (
    <div className=" bg-lightgray ">
      <div className="w-full flex flex-row">
        <div className="flex-initial w-2/5 ">
          <img src={process.env.PUBLIC_URL + '/assets/images/loginVector.svg'} alt='' />
        </div>
        <div className="flex-initial w-3/5   login-card flex flex-col items-center mt-32 ">
          <div className="flex-initial w-1/2 max-w-md ">
            <div className='container'>
              <h4 className="font-bold mb-7 text-xl page-name">Login</h4>
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
                  label={<label className='custom_label'>Email*</label>}
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'Please type a valid email',
                    },
                    {
                      message: 'Please input your email',
                    },
                  ]}
                >
                  <Input placeholder="Your email address" />
                </Form.Item>

                <Form.Item
                  name="password"
                  label={<label className='custom_label'>Password*</label>}
                  rules={[
                    {
                      message: 'Please input your password',
                    },
                  ]}
                >
                  <Input placeholder="•••••••••••••" type="password" />
                </Form.Item>
                <div >
                  <p className='text-primary cursor-pointer forgot_password' onClick={() => props.history.push('/forgotpassword')}>Forgot your password?</p>
                </div>
                <div className='flex flex-row items-center gap-10'>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white custom_text  h-10 px-15 rounded-lg w-40	" type="submit">
                    Login
                  </button>
                  <div>
                    <p className='text-primary cursor-pointer custom_text' onClick={() => props.history.push('/signup')}>Sign up</p>
                  </div>
                </div>

              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default connect(null, { login })(Login)