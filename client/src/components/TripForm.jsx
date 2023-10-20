import React, { useState } from "react";
// import M from 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';
import { useMutation } from "@apollo/client";
import { SAVE_TRIP } from "../utils/mutations";
// import * as React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { KnownTypeNamesRule } from "graphql";


// import Auth from '../utils/auth';
const TripForm = (handleClose) => {
  

  const [userFormData, setUserFormData] = useState({
    title: "",
    location: "",
    start: "",
    end: "",
    description: "",
  });

  const [saveTrip, { error }] = useMutation(SAVE_TRIP);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("ya mama");
    handleClose();
  };

  return (
   <>
   
      <form
      maxScreen={true}
      fullWidth={true}
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <TextField
          id="title"
          label="Title"
          type="text"
          name="title"
          value={userFormData.title}
          onChange={handleInputChange}
        />
        <TextField
          id="location"
          label="Location"
          type="text"
          name="location"
          value={userFormData.location}
          onChange={handleInputChange}
        />
        <TextField
          id="start"
          label="start"
          type="text"
          name="start"
          value={userFormData.start}
          onChange={handleInputChange}
        />
        <TextField
          id="end"
          label="end"
          type="text"
          name="end"
          value={userFormData.end}
          onChange={handleInputChange}
        />
        <TextField
          id="description"
          label="description"
          type="text"
          name="description"
          value={userFormData.description}
          onChange={handleInputChange}
        />
      </form>
      <div>
        <Button variant="contained">Add A Trip</Button>
       
      </div>
    </>
  );
};

export default TripForm;
