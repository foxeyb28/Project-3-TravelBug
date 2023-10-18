import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

function RestaurantCard({ restaurant }) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={restaurant.image} alt={restaurant.name} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {restaurant.name}<i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {restaurant.name}<i className="material-icons right">close</i>
        </span>
        <p>{restaurant.description}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
