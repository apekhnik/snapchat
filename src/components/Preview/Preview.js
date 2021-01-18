import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCameraImage,
  resetCameraImage,
} from "../../features/cameraSlice";
import "./index.css";
import CloseIcon from "@material-ui/icons/Close";
const Preview = () => {
  const imgSrc = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();
  const closePreview = () => {
    dispatch(resetCameraImage());
  };
  useEffect(() => {}, [history, imgSrc]);
  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />
      <img src={imgSrc} alt="" />
    </div>
  );
};
export default Preview;
