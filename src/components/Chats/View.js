import React, { useEffect } from "react";
import "./index.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSelectedImage } from "../../features/appSlice";
const ChatView = () => {
  const img = useSelector(getSelectedImage);
  const history = useHistory();

  useEffect(() => {
    if (!img) history.replace("/chats");
  }, [img, history]);
  return (
    <div className="view">
      <img src={img} alt="" />
      <div className="view__timer">
        <CountdownCircleTimer
          className="view__timer"
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={[["#004777", 0.33, "#F7B801", 0.33, "#A30000", 0.33]]}
        >
          {({ remainingTime }) => {
            if (remainingTime === 0) history.replace("/chats");
            return remainingTime;
          }}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};
export default ChatView;
