import Styles from "./Feed.module.css";
import { RxHeart } from "react-icons/rx";
import { FaRegComment } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import { Comment_Posts, Get_Comment, Like_Posts } from "../../utils/localData";
import { useEffect, useState } from "react";
export default function Feed({ data, token }) {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState([]);
  const [page, setPage] = useState(false);
  const [hide, setHide] = useState(false);

  const handleLike = async (e) => {
    e.preventDefault();
    let page = { likes: data.likes + 1 };
    try {
      let res = await Like_Posts(token, data._id, page);
      setLike(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();

    try {
      let res = await Comment_Posts(token, data._id, { title: comment });
      alert("comment success");
      setPage(!page);
    } catch (err) {
      console.log(err);
    }
  };

  const get_comment = async () => {
     try {
       let res = await Get_Comment(token, data._id);
       setAllComment(res.data);
       
     } catch (err) {
       console.log(err);
     }
  };

  console.log(allComment)
  useEffect(() => {
    get_comment();
  },[page])

  return (
    <div className={Styles.Box}>
      <div>
        <img src={data.image_url} alt="post_card" />
      </div>
      <div className={Styles.Comment}>
        <p onClick={handleLike} className={like ? Styles.Like : ""}>
          <RxHeart />
        </p>
        <p onClick={()=>setHide(!hide)} > <FaRegComment /> </p>
        
        <TbShare3 />
      </div>
      <div>
        <p>{like ? +data.likes + 1 : data.likes}likes</p>
        <p>{data.title}</p>
      </div>
      <div>
        <input
          placeholder="coments..."
          type="text"
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <button className={Styles.Btn} onClick={handleComment}>comment</button>
      </div>
      <div>
        {allComment.map((el) => <div key={el._id} >
             <p>{el.title}</p>
        </div>)}
      </div>
    </div>
  );
}
