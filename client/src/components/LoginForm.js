import React, { useState } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import { loginUser } from '../utils/API.js';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { token, user } = await response.json();
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="row">
        <form className="col s12 m8 offset-m2">
          <div className="card-panel" style={{ padding: '20px', borderRadius: '10px' }}>
            <h4>Login</h4>
            <div className="input-field">
              <input
                id="email"
                type="text"
                className="validate"
                placeholder="Your email"
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field">
              <input
                id="password"
                type="password"
                className="validate"
                placeholder="Your password"
                name="password"
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            <button
              disabled={!(userFormData.email && userFormData.password)}
              className="btn waves-effect waves-light"
              type="submit"
              style={{ display: 'block', width: '100%' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="row">
          <div className="col s12">
            <div className="card red darken-1">
              <div className="card-content white-text">
                Something went wrong with your login credentials!
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
