import "./index.css";
import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { auth, db } from "../../firebase";
import { getUser } from "../../features/appSlice";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetCameraImage } from "../../features/cameraSlice";
const Chats = () => {
  const user = useSelector(getUser);
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const takeSnap = () => {
    dispatch(resetCameraImage());
    history.push("/");
  };
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setPosts(
          snap.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        )
      );
  }, []);
  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar
          className="chats__avatar"
          src={user.profilePic}
          onClick={() => auth.signOut()}
        />
        <div className="chats__search">
          <SearchIcon className="chats_searchIcon" />
          <input type="text" placeholder="Freinds" />
        </div>
        <ChatBubbleIcon className="chats_chatIcon" />
      </div>
      <div className="chats__posts">
        {posts.map(({ id, data }) => (
          <Chat id={id} key={id} {...data} />
        ))}
      </div>
      <RadioButtonUncheckedIcon
        className="chats__takePickIcon"
        onClick={takeSnap}
        fontSize="large"
      />
    </div>
  );
};
export default Chats;
