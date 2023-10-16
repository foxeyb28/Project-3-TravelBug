import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { loginUser } from '../utils/API.js';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async () => {
    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    // Clear the form fields
    setUserFormData({ email: '', password: '' });
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Login</h2>
      <Form
        name="loginForm"
        onFinish={handleFormSubmit}
        initialValues={userFormData}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
              type: 'email',
            },
          ]}
        >
          <Input
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Your email"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
          ]}
        >
          <Input
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder="Your password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={!userFormData.email || !userFormData.password}
          >
            Submit
          </Button>
        </Form.Item>

        {showAlert && (
          <Alert
            message="Error"
            description="Something went wrong with your login credentials!"
            type="error"
            showIcon
          />
        )}
      </Form>
    </div>
  );
};

export default LoginForm;
