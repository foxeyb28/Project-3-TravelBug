 import { gql } from '@apollo/client';
export const SAVE_TRIP = gql`
    {
        me {
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
