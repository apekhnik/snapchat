import "./index.css";
import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { db } from "../../firebase";
const Chats = () => {
  const [posts, setPosts] = useState([]);
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
        <Avatar className="chats__avatar" />
        <div className="chats__search">
          <SearchIcon className="chats_searchIcon" />
          <input type="text" placeholder="Freinds" />
        </div>
        <ChatBubbleIcon className="chats_chatIcon" />
      </div>
      <div className="chats__posts">
        {posts.map((post) => {
          console.log(post);
        })}
      </div>
    </div>
  );
};
export default Chats;
