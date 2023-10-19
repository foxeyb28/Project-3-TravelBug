import React, { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';

function RestaurantCard({ restaurant }) {
    console.log(restaurant)
  const [imageUrl, setImageUrl] = useState(null);
  
  // Function to fetch the image based on location ID
  const fetchRestaurantImage = async (locationId) => {
    try {
        const apiUrl = `https://travel-advisor.p.rapidapi.com/restaurants/list?location_id=${locationId}&restaurant_tagcategory=10591&restaurant_tagcategory_standalone=10591&currency=USD&lunit=km&limit=30&open_now=false&lang=en_US`;

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '62efcc3a35mshdaeb040dd328b4ap178502jsnd47fc21e5388',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch image. Status: ${response.status}`);
        }

        const imageData = await response.json();
        console.log(imageData)

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
    fetchRestaurantImage(restaurant.location_id);
  }, [restaurant.location_id]);

  return (
    <div className="card row">
      <div className="card-image waves-effect waves-block waves-light col s3">
        {console.log(restaurant)}
        {imageUrl ? (
          <img className="activator responsive-img" src={imageUrl} alt={restaurant.name} />
        ) : (
          <div className="loader">Loading...</div>
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {restaurant.name}<i className="material-icons right"></i>
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
