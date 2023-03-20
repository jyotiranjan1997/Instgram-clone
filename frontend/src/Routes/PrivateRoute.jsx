import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { token_id } = useSelector((store) => store.LoginReducer);
  const location = useLocation();

  if (!token_id) {
    return <Navigate to="/login" state={location.pathname} replace />;
  }

  return <>{children}</>;
}
