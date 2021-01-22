import { Avatar } from "@material-ui/core";
import React from "react";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import ReactTimeago from "react-timeago";
import { selectImage } from "../../features/appSlice";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Chat = ({ profilePic, username, read, imageUrl, timestamp, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const timeAgo = (
    <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
  );
  const open = () => {
    dispatch(selectImage(imageUrl));
    history.push("/chats/view");
    if (!read) {
      db.collection("posts").doc(id).set({ read: true }, { merge: true });
    }
  };
  return (
    <div className="chat" onClick={open}>
      <Avatar className="chat__avatar" src={profilePic} />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          {read && "Tap to view -"} {timeAgo}
        </p>
      </div>
      {!read && <StopRoundedIcon className="chat__readIcon" />}
    </div>
  );
};
export default Chat;
