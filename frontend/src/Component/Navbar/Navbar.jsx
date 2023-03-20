import Styles from "./Navbar.module.css";
import { RxHome, RxHeart, RxPlusCircled } from "react-icons/rx";
import { BsMessenger, BsFillCameraReelsFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PickerOverlay } from "filestack-react";
export default function Navbar() {

  return (
    <div className={Styles.Navbar}>
      <div>
        <img src={"/Instagram.png"} alt="logo" />
      </div>
      <div>
        <Link to="/">
          <div className={Styles.Links}>
            <RxHome />
            <p>Home</p>
          </div>
        </Link>
        <Link>
          <div className={Styles.Links}>
            <AiOutlineSearch />
            <p>Search</p>
          </div>
        </Link>
        <Link>
          <div className={Styles.Links}>
            <MdExplore />
            <p>Explore</p>
          </div>
        </Link>
        <Link>
          <div className={Styles.Links}>
            <BsFillCameraReelsFill />
            <p>Reels</p>
          </div>
        </Link>
        <Link>
          <div className={Styles.Links}>
            <BsMessenger />
            <p>Messeges</p>
          </div>
        </Link>
        <Link>
          <div className={Styles.Links}>
            <RxHeart />
            <p>Notifications</p>
          </div>
        </Link>
        <Link to="/post" >
          <div className={Styles.Links}>
            <RxPlusCircled />
            <p  >Create</p>
          </div>
        </Link>
        <Link to="/profile">
          <div className={Styles.Links}>
            <CgProfile />
            <p>Profile</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
