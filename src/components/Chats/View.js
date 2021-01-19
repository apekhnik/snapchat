import React, { useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const ChatView = () => {
  const img = useSelector((state) => state.app.selectedImage);
  const history = useHistory();

  useEffect(() => {
    if (!img) history.replace("/chats");
  }, [img, history]);
  return (
    <div className="view">
      <img src={img} alt="" />
      <CountdownCircleTimer
        isPlaying
        duration={10}
        strokeWidth={6}
        size={50}
        colors={[["#004777", 0.33, "#F7B801", 0.33, "#A30000", 0.33]]}
      >
        {({ remainingTime }) => {
          return remainingTime;
        }}
      </CountdownCircleTimer>
    </div>
  );
};
export default ChatView;
