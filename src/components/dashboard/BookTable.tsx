import EmptyState from "../common/EmptyState";

// import { deletePost } from "@/constant/requestManager";

import React, { useState } from "react";
import { BsNewspaper } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { BookType } from "../../types/componentsTypes";
import { Link } from "react-router-dom";
import { Button, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { DELETE_BOOK_MUTATION } from "../../graphql/mutations";

const BookTable = ({ books }: { books: BookType[] }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [bookId, setBookId] = useState<null | number>(null);
  const [deleteBook, { data, loading, error }] =
    useMutation(DELETE_BOOK_MUTATION);

  //   const { mutate, isLoading } = useMutation(deletePost, {
  //     onSuccess: () => {
  //       toast.success("Post deleted successfully.", {
  //         position: "top-right",
  //       });
  //       setDeleteModal(false);
  //       refetch();
  //     },
  //     onError: () => {
  //       toast.success("An error occur, try again.", {
  //         position: "top-right",
  //       });
  //     },
  //   });

  return (
    <div>
      <div className="flex mb-6 flex-col md:flex-row justify-between md:items-center">
        <p className="text-textcolor md:mb-0 mb-3  font-semibold">Books</p>
      </div>

      {/* table starts here */}

      {books.length === 0 ? (
        <EmptyState
          name={"blog"}
          title={"No Blog Details"}
          Icon={BsNewspaper}
        />
      ) : (
        <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {["Book ID", "Name", "Description", "Actions"].map(
                  (item, idx) => (
                    <th key={idx} scope="col" className="px-6 py-3">
                      {item}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {books.map((item: BookType, idx: number) => (
                <tr key={idx} className="bg-white cursor-pointer border-b  ">
                  <th
                    scope="row"
                    className="px-4 py-4 font-medium  whitespace-nowrap "
                  >
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.name}</td>

                  <td className="px-6 py-4">{item.description}</td>

                  <td align="left">
                    <span className="flex ml-3 space-x-3 justify-start">
                      <Link to={{ pathname: `/profile/create-book` }}>
                        <button className="bg-blue-700 border flex space-x-2 hover:bg-blue-700/40   rounded-md p-1">
                          <CiEdit className="text-white" />
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setBookId(item.id);
                          //   setDeleteModal(true);
                        }}
                        className="bg-red-700 border flex space-x-2 hover:bg-red-700/40   rounded-md p-1"
                      >
                        <RiDeleteBin6Line className="text-white" />
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* delete modal start here  */}

      <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-[16rem] md:w-[24rem]  h-auto">
            <div className="flex flex-col space-y-3 justify-center items-center">
              <MdErrorOutline className="text-red-600 text-5xl" />
              <p className="text-lg font-semibold text-title  mt-2">
                Delete BooK
              </p>
              <p className="text-sm  text-textcolor  mt-2">
                You are about to delete this book.
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <Button
                onClick={() => setDeleteModal(false)}
                color="#003D29"
                colorScheme="#003D29"
                variant="outline"
                className="border px-4 py-1 rounded-md text-xs border-primary"
              >
                Cancel
              </Button>

              <div className="max-w-[12rem]">
                <Button
                  onClick={() =>
                    deleteBook({ variables: { input: bookId as number } })
                  }
                  color="#003D29"
                  colorScheme="#003D29"
                  className="border px-4 py-1 rounded-md text-xs border-primary"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>

      {/* <Modal onClose={() => setDeleteModal(false)} open={deleteModal}>
      
      </Modal> */}
    </div>
  );
};

export default BookTable;
