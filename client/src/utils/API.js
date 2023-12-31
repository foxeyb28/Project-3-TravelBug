// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  // save trip data for a logged in user
  export const saveTrip = (tripData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(tripData),
    });
  };
  
  // remove saved trip data for a logged in user
  export const deleteTrip = (tripId, token) => {
    return fetch(`/api/users/trip/${tripId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  // // make a search to google books api
  // // https://www.googleapis.com/books/v1/volumes?q=harry+potter
  // export const searchGoogleBooks = (query) => {
  //   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  // };
  