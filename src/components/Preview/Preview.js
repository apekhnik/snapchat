import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCameraImage,
  resetCameraImage,
} from "../../features/cameraSlice";
import "./index.css";
import CloseIcon from "@material-ui/icons/Close";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";
const Preview = () => {
  const imgSrc = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();
  const closePreview = () => {
    dispatch(resetCameraImage());
  };
  const sendPost = () => {};
  useEffect(() => {}, [history, imgSrc]);
  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />
      <div className="preview__toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={imgSrc} alt="" />
      <div
        style={{ width: "250px", height: "400px", background: "white" }}
      ></div>
      <div className="preview__footer" onClick={sendPost}>
        <h3>Send now</h3>
        <SendIcon className="preview__sendIcon" />
      </div>
    </div>
  );
};
export default Preview;
