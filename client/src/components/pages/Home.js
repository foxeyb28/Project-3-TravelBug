import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Input as AntInput, Button as AntButton } from 'antd';
import '../pages/home.css'; // Import a custom CSS file for styling

export default function Home({ handleChange, handleSearch, cityName }) {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="title">Travel Bug</h1>
      </header>
      <div className="content">
        <div className="search-container">
          <AntInput
            className="city-input"
            placeholder="Enter city name..."
            value={cityName}
            name="cityName"
            onChange={handleChange}
          />
          <AntButton
            className="search-button"
            type="primary"
            onClick={handleSearch}
          >
            Search
          </AntButton>
        </div>
        <p className="elevator-pitch">Discover your next adventure with Travel Bug.</p>
      </div>
    </div>
  );
}
