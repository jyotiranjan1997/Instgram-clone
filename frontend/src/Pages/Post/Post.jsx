import { useDisclosure } from "@chakra-ui/react";
import { PickerOverlay } from "filestack-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";
import ModalPost from "../../Component/Modal";
import { Create_Post } from "../../utils/localData";
const initialState = {
  image_url: "",
  title: "",
  likes: 0,
};
export default function Post() {
  const [isPickup, setPickup] = useState(false);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState(initialState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token_id } = useSelector((store) => store.LoginReducer);
  const Navigate = useNavigate();

  const handlePickup = (e) => {
    e.preventDefault();
    setPickup(!isPickup);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      let res = await Create_Post(token_id, data);
      alert("Successully uploaded");
      Navigate("/");
      setLoad(false);
    } catch (err) {
      alert("failed to create post");
      setLoad(false);
    }
  };

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <div>
      {load ? (
        <Loading />
      ) : (
        <ModalPost
          onClose={onClose}
          isOpen={isOpen}
          handlePickup={handlePickup}
          data={data}
          setData={setData}
          handleUpdate={handleUpdate}
        />
      )}

      {isPickup && (
        <PickerOverlay
          apikey={"AXwxB2tFnRvSuBN35HzvXz"}
          onUploadDone={(res) => {
            setData({ ...data, image_url: res.filesUploaded[0].url });
            handlePickup(false);
          }}
        />
      )}
    </div>
  );
}
