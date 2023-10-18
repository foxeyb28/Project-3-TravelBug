import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import SignUpForm from './SignUpForm'; 

function MyCard({ trip }) {
  // Add state to track when the card is open
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <div className="card" onClick={() => setCardOpen(true)}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" alt="Office" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      {cardOpen && (
        <div className="card-reveal">
          <SignUpForm /> 
        </div>
      )}
    </div>
  );
}

export default MyCard;
