import { gql } from "@apollo/client";

export const GET_All_BOOKS = gql`
  {
    books {
      id
      description
      name
    }
  }
`;
