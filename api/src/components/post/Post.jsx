/*import "./post.css"

//import { Users } from "../../dummyData"
import { useState } from "react"
export default function Post({post}) { 
  const [like,setLike]=useState(post.like)
  const [isLiked,setIsLiked]=useState(false)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
   const likeHandler=()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
   }*/

   import "./post.css";
//import { MoreVert } from "@material-ui/icons";
import { MoreVert ,ThumbUp,Favorite} from "@mui/icons-material"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser(); 
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
        <div className="postWrapper">
             <div className="postTop">
                <div className="postTopLeft">
                  <Link to={`profile/${user.username}`}>
                  <img src={user.profilePicture || PF+"persons/noavatar.png"} alt="" className="postProfileImg" />
                  </Link>
                    
                    <div className="postUsername">{user.username}</div>
                    <div className="postDate">{format(post.createdAt)}</div>
                </div>
                <div className="postTopRight">
                 <MoreVert/>
                </div>
             </div>
             <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt="" />
             </div>
             <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUp className="likeIcon" htmlColor="blue" onClick={likeHandler} />
                    <Favorite className="likeIcon" htmlColor="red" onClick={likeHandler}/>
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}</span>
                </div>
             </div>  </div>
             <div/>
            
             <div/>
    </div>
    
  )
}
