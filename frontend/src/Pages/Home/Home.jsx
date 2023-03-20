import Styles from "./Home.module.css";
import Feed from "../../Component/PostCard/Feed";
import { useEffect, useState } from "react";
import { Get_Posts, Get_Suggestion } from "../../utils/localData";
import { useSelector } from "react-redux";
import UserCard from "../../Component/UserCard.jsx/UserCard";
export default function Home() {
  const [feed, setFeed] = useState([]);
  const [user, setUsers] = useState([]);
  const { token_id } = useSelector((store) => store.LoginReducer);

  const get_data = async () => {
    try {
      let res =await Get_Suggestion(token_id);
      console.log(res.data);
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
const Get_data2=async()=>{
  try {
    let res = await Get_Posts(token_id);
    setFeed(res.data);
  } catch (err) {
    console.log(err);
  }
}



  useEffect(() => {
    get_data();
    Get_data2();
  }, []);

  return (
    <div className={Styles.Home}>
  
      <div>
        {feed.map((el)=> <Feed key={el._id} data={el} token={token_id} /> )}
      </div>
      <div className={Styles.Friend} >
        <h4>Firends Suggestions</h4>

        {user.map((el) => (
          <UserCard key={el._id} username={el.username} />
        ))}
      </div>
    </div>
  );
}
