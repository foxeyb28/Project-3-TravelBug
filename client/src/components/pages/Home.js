import React, { useEffect, useState } from 'react';
import M from 'materialize-css'; 
import auth from '../../utils/auth';
import TripForm from '../TripForm'; 

export default function Home({ handleChange, handleSearch, cityName, user }) {
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    M.AutoInit();
    try {
      console.log(auth.getProfile());
    } catch (e) {
      console.error("OH NO", e);
    }

  }, []);

  const renderPersonalizedContent = () => {
    if (userData) {
      return (
        <div>
          <h1>Welcome, {userData.username}!</h1>
          {userData.preferences === 'traveler' ? (
            <p>Explore amazing destinations</p>
          ) : (
            <p>Discover local gems near you</p>
          )}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome to Travel Bug</h1>
          <p>Your Adventure Awaits</p>
        </div>
      );
    }
  };

  return (
    <div className="container">
      {renderPersonalizedContent()}

      <div className="row">
        <div className="input-field col s12">
          <input
            id="cityName"
            type="text"
            className="validate"
            value={cityName}
            name="cityName"
            onChange={handleChange}
          />
          <label htmlFor="cityName">Enter Your Destination</label>
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={handleSearch}
          >
            Search
            <i className="material-icons right"></i>
          </button>
        </div>
      </div>
      <TripForm /> 

    </div>
  );
}