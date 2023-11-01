import { useQuery } from "@apollo/client";
import React from "react";
import { GET_All_BOOKS } from "../../graphql/query";

const BooksList = () => {
  const { data, loading } = useQuery(GET_All_BOOKS);

  console.log(data);

  return <div>BooksList</div>;
};

export default BooksList;
