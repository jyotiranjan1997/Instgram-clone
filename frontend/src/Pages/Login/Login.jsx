import { Link, useNavigate } from "react-router-dom";
import Styles from "./Login.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../Redux/Auth/Auth.Action";
import Loading from "../../Component/Loading/Loading";

const initialState = {
  username: "",
  password: "",
};

export default function Login() {
  const [LoginData, setLoginData] = useState(initialState);
  const [load, setload] = useState(false);
  const { auth, is_loading, is_error } = useSelector(
    (store) => store.LoginReducer
  );
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  // Store the Input fields data to the state//
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...LoginData, [name]: value });
  };

  const Login_details = () => {
    if (load) {
      if (auth) {
        Navigate("/");
      } else {
        alert("Login failed");
      }
    }
    setTimeout(() => {
      setload(false);
    }, 800);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      password: LoginData.password,
    };
    if (
      LoginData.username === "" ||
      LoginData.username === null ||
      LoginData.password === "" ||
      LoginData.password === null
    ) {
      alert("please fill all details");
    } else {
      if (
        LoginData.username.includes("@") &&
        LoginData.username.includes(".")
      ) {
        data.email = LoginData.username;
      } else {
        data.username = LoginData.username;
      }
      dispatch(LOGIN(data));
      setload(true);
    }
  };

  useEffect(() => {
    Login_details();
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
            <div className={Styles.Form}>
              <form onSubmit={handleLogin}>
                <input
                  placeholder="Enter username or mobile"
                  name="username"
                  type="text"
                  value={LoginData.username}
                  onChange={handleChange}
                />
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={LoginData.password}
                  onChange={handleChange}
                />
                <div className={Styles.Signup}>
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
            <div>
              <div className={Styles.Facebook}>
                <p>
                  <FaFacebookSquare />
                </p>
                <p>Log in with Facebook</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              Don't have an account? <Link to="/signup">Signup</Link>{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
