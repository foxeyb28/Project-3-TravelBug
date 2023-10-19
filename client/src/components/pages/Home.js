import React, { useEffect } from 'react';
import M from 'materialize-css';
import TripForm from '../TripForm';

import Button from "@mui/material/Button";
import ModalDialog from '../ModalDialog';

export default function Home({ handleChange, handleSearch, cityName }) {
  useEffect(() => {
    M.AutoInit();
  }, []);



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      <Button varian="contained" color="primary" onClick={handleOpen}>Add a Trip</Button>
      <ModalDialog maxScreen={true} fullWidth={true} open={open} handleClose={handleClose} />
    </div>
  );
}
