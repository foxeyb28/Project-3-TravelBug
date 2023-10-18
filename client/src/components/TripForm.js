import React, { useState } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { useMutation } from '@apollo/client';
import { SAVE_TRIP } from '../utils/mutations';
// import Auth from '../utils/auth';

const TripForm = () => {

const [userFormData, setUserFormData] = useState({ 
    "title": '', 
    "location": '',
    "start": '',
    "end": '',
    "description": ''
});

const [saveTrip, { error }] = useMutation(SAVE_TRIP);

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
}

const handleFormSubmit = async (event) => {
        event.preventDefault();
        
}


        return (
            <div>
                <button className="waves-effect waves-light btn modal-trigger" data-target="modal1">Add Trip</button>

                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Make a new trip:</h4>

                        <div className="row">
                            <form className="col s12">
                                <div className="row modal-form-row">
                                    <div className="input-field col s12">
                                        <input id="title" type="text"  name="title" onChange={handleInputChange} value={userFormData.title}required/>
                                        <label for="title">Trip Name</label>
                                    </div>
                                </div>
                                <div className="row modal-form-row">
                                    <div className="input-field col s12">
                                        <input id="location" type="text"  name="location" onChange={handleInputChange} value={userFormData.location}required/>
                                        <label for="location">Location</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="start" type="text"  name="start" onChange={handleInputChange} value={userFormData.start}required/>
                                        <label for="start">Start Date:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="end" type="text"  name="end" onChange={handleInputChange} value={userFormData.end}required/>
                                        <label for="end">End Date:</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="description" type="text" className="materialize-textarea validate" name="description" onChange={handleInputChange} value={userFormData.description}/>
                                        <label for="description">Description</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a className=" modal-action modal-close waves-effect waves-green btn-flat">Add trip</a>
                    </div>
                </div>
            </div>
        )
    };





export default TripForm;