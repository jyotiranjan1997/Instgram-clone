import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import Styles from "./App.module.css";
import { useSelector } from "react-redux";
function App() {
  const { token_id } = useSelector((store) => store.LoginReducer);
 
  return (
    <div>
      <div className={token_id ? Styles.Main : ""}>
        {token_id && <Navbar />}
        <div>
          <AllRoutes />
          <div className={Styles.Footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
