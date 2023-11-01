import { useQuery } from "@apollo/client";
import React from "react";
import { GET_All_BOOKS } from "../../graphql/query";

const BooksList = () => {
  const { data, loading, error } = useQuery(GET_All_BOOKS);

  console.log("fetched data ", data);
  console.log("fetched data ", error);

  return <div>BooksList</div>;
};

export default BooksList;
