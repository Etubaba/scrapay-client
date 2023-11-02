import { useState } from "react";
import { UpdateBookType } from "../../types/componentsTypes";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { UPDATE_BOOK_MUTATION } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const UpdateBookModal = ({
  isOpen,
  onClose,
  book,
  refetch,
}: UpdateBookType) => {
  const [bookName, setBookName] = useState(book?.name);
  const [description, setDescription] = useState(book?.description);
  const toast = useToast();

  const [mutate, {}] = useMutation(UPDATE_BOOK_MUTATION);

  const onUpdate = async () => {
    try {
      const variables = {
        input: {
          id: book?.id,
          name: book?.name,
          description: book?.description,
        },
      };
      await mutate({ variables });

      // toast success notification on success
      toast({
        title: `${book?.name} Updated .`,
        description: `You updated  ${book?.name} successfully.`,
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      // refetch
      refetch();
      onClose();
    } catch (err) {
      toast({
        title: `Something went wrong`,
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="w-[16rem] md:w-[18rem] p-4 h-auto">
        <ModalHeader>Update Book</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Book name</FormLabel>
            <Input
              onChange={(e) => setBookName(e.target.value)}
              value={bookName}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={onUpdate}
            color="#003D29"
            colorScheme="#003D29"
            variant="outline"
            size={"sm"}
          >
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateBookModal;
