import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!){
    loginUser(email: $email, password: $password) {
    token
    user{
        _id
        username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email:String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
    }
}
`;

export const SAVE_TRIP = gql`
mutation saveTrip($tripData: TripInput!) {
    saveTrip(tripData: $tripData) {
            _id
            username
            email
            savedTrips {
                tripId
                title
                description
            }
    }
    }
`;

export const REMOVE_TRIP = gql`
mutation removeTrip($tripId: String!) {
    removeTrip(tripId: $tripId) {
        _id
        username
        email
        savedTrips {
            tripId
            title
            description
        }
    }
}`;

