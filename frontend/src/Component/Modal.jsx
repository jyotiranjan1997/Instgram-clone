import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./EditProfile/EditProfile.module.css";

export default function ModalPost({
  isOpen,
  onClose,
  data,
  setData,
  handlePickup,
  handleUpdate,
}) {
  const Navigate = useNavigate();
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
    Navigate("/");
  };
  const handleClose2 = () => {
    onClose();
    Navigate("/");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose2}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className={Styles.Form}>
              <input
                placeholder="About of your post"
                name="name"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
              <button onClick={(e)=>handlePickup(e)}>Select Image</button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button
              disabled={data.title === "" || data.image_url === ""}
              variant="ghost"
              onClick={handleUpdate}
            >
              create post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
