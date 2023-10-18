import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

function AttractionsCard({ attraction }) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={attraction.image} alt={attraction.name} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {attraction.name}<i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {attraction.name}<i className="material-icons right">close</i>
        </span>
        <p>{attraction.description}</p> 
      </div>
    </div>
  );
}

export default AttractionsCard;
