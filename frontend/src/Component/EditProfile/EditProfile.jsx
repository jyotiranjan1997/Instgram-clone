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
import { Update_profile } from "../../utils/localData";
import Styles from "./EditProfile.module.css";

export default function EditProfile({ isOpen, onClose, user, token,get_data }) {
  const [data, setData] = useState({});
    const toast = useToast;
    
    const get_toast = (data,type) => {
        alert(data);
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let res = await Update_profile(token, data);
        get_toast("Profile updated successfully", "success");
        onClose();
        get_data();
    } catch (err) {
     get_toast("Profile updated failed", "error");
    }
  };

  useEffect(() => {
    setData(user);
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Profile Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className={Styles.Form}>
              <input
                placeholder="Enter mobile or email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              <input
                placeholder="Fullname"
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <input
                placeholder="date of Birth"
                type="date"
                name="dateOfBirth"
                value={data.dateOfBirth}
                onChange={handleChange}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={handleUpdate}>
              update profile
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
