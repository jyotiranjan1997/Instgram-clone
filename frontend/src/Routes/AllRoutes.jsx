import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Post from "../Pages/Post/Post";
import Profile from "../Pages/Profile/Profile";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute>{<Home />}</PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/post" element={<Post />} />
      <Route
        path="/profile"
        element={<PrivateRoute> {<Profile />}</PrivateRoute>}
      />
    </Routes>
  );
}
