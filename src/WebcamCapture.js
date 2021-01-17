import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};
const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const capture = useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imgSrc));
    setImage(imgSrc);
  }, [webcamRef]);
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        screenshotFormat="image/jpeg"
        ref={webcamRef}
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon
        className="webcamCapture__button"
        onClick={capture}
      />
      <img src={image} alt="" />
    </div>
  );
};
export default WebcamCapture;
