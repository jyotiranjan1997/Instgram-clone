import Styles from "./Signup.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Component/Loading/Loading";
import { SIGNUP } from "../../Redux/Auth/Auth.Action";

const initialState = {
  email: "",
  name: "",
  username: "",
  password: "",
  dateOfBirth: "",
};

export default function Signup() {
  const [SignUpData, setSignUpData] = useState(initialState);
  const [load, setload] = useState(false);
  const { is_loading, is_error, auth } = useSelector(
    (store) => store.SignupReducer
  );

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  // Store the Input fields data to the state//
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...SignUpData, [name]: value });
  };

  const Signup_details = () => {
    if (load) {
      if (is_error) {
        alert("Something went wrong try again !");
      } else if (auth) {
        alert("Signup Successfully ");
        Navigate("/login");
      }
    }
    setTimeout(() => {
      setload(false);
    },800)
    
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      SignUpData.email === "" ||
      SignUpData.email === null ||
      SignUpData.name === "" ||
      SignUpData.name === null ||
      SignUpData.password === null ||
      SignUpData.username === "" ||
      SignUpData.null ||
      SignUpData.dateOfBirth === ""
    ) {
      alert("Please fill credetional");
    } else if (
      !SignUpData.email.includes("@") ||
      !SignUpData.email.includes(".")
    ) {
      alert("Enter valid email");
    } else {
      dispatch(SIGNUP(SignUpData));
      // setload(true);
      console.log(SignUpData);
      console.log("calling")
    }
  };

  useEffect(() => {
    Signup_details();
  }, [auth]);

  return (
    <div className={Styles.Signup_container}>
      {is_loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <div className={Styles.Logo}>
              <img src={"/Instagram.png"} alt="logo" />
            </div>
            <div className={Styles.Heading}>
              <p>Sign up to see photos and videos</p>
              <p>from your friends.</p>
            </div>
            <div>
              <div className={Styles.Facebook}>
                <p>
                  <FaFacebookSquare />
                </p>
                <p>Log in with Facebook</p>
              </div>
            </div>

            <div className={Styles.Form}>
              <form onSubmit={handleSignup}>
                <input
                  placeholder="Enter mobile or email"
                  name="email"
                  value={SignUpData.email}
                  onChange={handleChange}
                />
                <input
                  placeholder="Fullname"
                  type="text"
                  name="name"
                  value={SignUpData.name}
                  onChange={handleChange}
                />
                <input
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={SignUpData.username}
                  onChange={handleChange}
                />
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={SignUpData.password}
                  onChange={handleChange}
                />
                <input
                  placeholder="date of Birth"
                  type="date"
                  name="dateOfBirth"
                  value={SignUpData.dateOfBirth}
                  onChange={handleChange}
                />
                <div className={Styles.Containt}>
                  <p>
                    People who use our service may have uploaded your contact
                    information to Instagram. Learn More
                  </p>
                </div>
                <div className={Styles.Containt}>
                  <p>
                    By signing up, you agree to our Terms , Privacy Policy and
                    Cookies Policy.
                  </p>{" "}
                </div>

                <div className={Styles.Signup}>
                  <button type="submit">Sign up</button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <p>
              Have an Account? <Link to="/login">Login</Link>{" "}
            </p>
          </div>{" "}
        </>
      )}
    </div>
  );
}
