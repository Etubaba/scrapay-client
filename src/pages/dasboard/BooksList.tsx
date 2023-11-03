import { useQuery } from "@apollo/client";
import { GET_All_BOOKS } from "../../graphql/query";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import BookTable from "../../components/dashboard/BookTable";

const BooksList = () => {
  const { data, loading, error, refetch } = useQuery(GET_All_BOOKS);

  const books = error || data === undefined ? [] : data?.books;

  return (
    <div>
      <div className="flex md:flex-row mb-10  md:space-y-0 justify-between items-center">
        <p className="text-lg text-title   tracking-wide font-semibold">
          Books
        </p>
        <Link to={"/profile/create-book"}>
          <Button
            color="#003D29"
            colorScheme="#003D29"
            variant="outline"
            size={"sm"}
          >
            Create Book
          </Button>
        </Link>
      </div>
      <BookTable refetch={refetch} books={books} />
    </div>
  );
};

export default BooksList;
