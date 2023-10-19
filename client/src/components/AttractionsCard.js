import React, { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';

function AttractionsCard({ attraction }) {
  const [imageUrl, setImageUrl] = useState(null);
  
  // Function to fetch the image based on location ID
  const fetchRestaurantImage = async (locationId) => {
    try {
      const apiUrl = `https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${locationId}&currency=USD&lang=en_US&lunit=km&sort=recommended`;

      const response = await fetch(apiUrl, {
        headers: {
          'X-RapidAPI-Key': '62efcc3a35mshdaeb040dd328b4ap178502jsnd47fc21e5388',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch image. Status: ${response.status}`);
      }

      const imageData = await response.json();

      if (imageData && imageData.data && imageData.data[0] && imageData.data[0].photo) {
        setImageUrl(imageData.data[0].photo.images.original.url);
      } else {
        console.error("Image data not found in the API response.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    // Fetch the image when the component mounts
    fetchRestaurantImage(attraction.location_id);
  }, [attraction.location_id]);

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {imageUrl ? (
          <img className="activator" src={imageUrl} alt={attraction.name} />
        ) : (
          <div className="loader">Loading...</div>
        )}
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
