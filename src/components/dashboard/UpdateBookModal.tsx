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
} from "@chakra-ui/react";

const UpdateBookModal = ({
  isOpen,
  onClose,
  book,
  refetch,
}: UpdateBookType) => {
  const [bookName, setBookName] = useState(book?.name);
  const [description, setDescription] = useState(book?.description);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="w-[16rem] md:w-[18rem] p-4 h-auto">
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Book name</FormLabel>
            <Input
              onChange={(e) => setBookName(e.target.value)}
              placeholder="Book name"
              value={bookName}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Last name"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Cancel</Button>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateBookModal;
