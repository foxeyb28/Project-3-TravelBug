 import { gql } from '@apollo/client';
export const GET_ME = gql`
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
