import Styles from "./Profile.module.css";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Get_Profile_data } from "../../utils/localData";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../Redux/Auth/Auth.Action";
import { useDisclosure } from "@chakra-ui/react";
import EditProfile from "../../Component/EditProfile/EditProfile";
export default function Profile() {
  const [data, setData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { token_id } = useSelector((store) => store.LoginReducer);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  
  const get_data = async () => {
    try {
      let res = await Get_Profile_data(token_id);
      setData(res.data);
    } catch (err) {
      console.log(err);
      alert("Something went wrong try again");
    }
  };

  // Logout

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(Logout());
    Navigate("/login");
  };

  useEffect(() => {
    get_data();
  }, []);

  return (
    <>
      <div className={Styles.Profile}>
        <div>
          <div className={Styles.Avatar}>
            <CgProfile />
          </div>
        </div>
        <div>
          <div className={Styles.heading1}>
            <div>
              <p>{data.username}</p>
            </div>
            <div className={Styles.Edit}>
              <button onClick={onOpen}>Edit Profile</button>
            </div>
            <div>
              <p className={Styles.logout} onClick={handleLogout}>
                Logout
              </p>
            </div>
          </div>
          <div className={Styles.heading1}>
            <div>
              <p>0 Posts</p>
            </div>
            <div>
              <button>{data.follwers?.length}follwers</button>
            </div>
            <div> {data.following?.length} following </div>
          </div>
          <div className={Styles.heading1}>
            <div>
              <p>{data.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.Line}>
        <hr />
        <div className={Styles.editProfile}>
          <EditProfile
            onClose={onClose}
            isOpen={isOpen}
            user={data}
            token={token_id}
            get_data={get_data}
          />
        </div>
      </div>
    </>
  );
}
