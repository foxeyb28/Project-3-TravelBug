import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function Home({ handleChange, handleSearch, cityName }) {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Welcome to Travel Bug</h1>
          <p>Your Adventure Awaits</p>
        </div>
      </div>

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
    </div>
  );
}
