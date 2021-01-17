import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCameraImage } from "../../features/cameraSlice";
import { useHistory } from "react-router-dom";
import "./index.css";
const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user",
};
const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const capture = useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imgSrc));
    history.push("/preview");
  }, [webcamRef, dispatch, history]);
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
    </div>
  );
};
export default WebcamCapture;
