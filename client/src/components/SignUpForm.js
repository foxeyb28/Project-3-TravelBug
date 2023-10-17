import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUpForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, {error}] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({ variables: { ...userFormData }});

      if (!data) {
        throw new Error('something went wrong!');
      }
      Auth.login(data.addUser.token); 

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

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

export default SignUpForm;





//  {/* This is needed for the validation functionality above */}
//       {/* <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         {/* show alert if server response is bad */}
//         <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
//           Something went wrong with your signup!
//         </Alert>

//         <Form.Group className='mb-3'>
//           <Form.Label htmlFor='username'>Username</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Your username'
//             name='username'
//             onChange={handleInputChange}
//             value={userFormData.username}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className='mb-3'>
//           <Form.Label htmlFor='email'>Email</Form.Label>
//           <Form.Control
//             type='email'
//             placeholder='Your email address'
//             name='email'
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className='mb-3'>
//           <Form.Label htmlFor='password'>Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Your password'
//             name='password'
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={!(userFormData.username && userFormData.email && userFormData.password)}
//           type='submit'
//           variant='success'>
//           Submit
//         </Button>
//       </Form> */}