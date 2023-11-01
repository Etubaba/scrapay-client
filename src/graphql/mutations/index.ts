import { gql } from "@apollo/client";

export const CREATE_BOOK_MUTATION = gql`
  mutation createBook($input: CreateBookInput!) {
    createBook(createBookInput: $input) {
      id
      name
      description
    }
  }
`;

export const UPDATE_BOOK_MUTATION = gql`
  mutation updateBook($input: UpdateBookInput!) {
    updateBook(updateBookInput: $input) {
      id
      description
      name
    }
  }
`;

export const DELETE_BOOK_MUTATION = gql`
  mutation remove($input: Int!) {
    removeBook(id: $input) {
      name
    }
  }
`;
