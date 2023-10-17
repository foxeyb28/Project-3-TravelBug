import { useState } from 'react';

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Handle form submission 

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="row">
        <div className="col s12 m6">
          <div className="card" style={{ padding: '20px', borderRadius: '10px' }}>
            <div className="card-content">
              <h4 className="center-align">Sign Up</h4>
              <div className="input-field">
                <input
                  id="username"
                  type="text"
                  className="validate"
                  placeholder="Your username"
                  name="username"
                  onChange={handleInputChange}
                  value={userFormData.username}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  placeholder="Your email address"
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
            </div>
            <div className="card-action center-align">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                style={{ display: 'block', width: '100%' }}
              >
                Submit
                <i className="material-icons right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
