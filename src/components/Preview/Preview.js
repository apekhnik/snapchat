import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import { getUser } from "../../features/appSlice";
import {
  selectCameraImage,
  resetCameraImage,
} from "../../features/cameraSlice";
import "./index.css";
import { v4 as uuid } from "uuid";
import CloseIcon from "@material-ui/icons/Close";
import Footer from "./Footer";
import RightToolbar from "./RightTollbar";
const Preview = () => {
  const imgSrc = useSelector(selectCameraImage);
  const { username, profilePic } = useSelector(getUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const closePreview = () => {
    dispatch(resetCameraImage());
  };
  const sendPost = () => {
    const id = uuid();
    const uploadTask = storage.ref(`posts/${id}`).putString(imgSrc, "data_url");
    uploadTask.on(
      "state_changed",
      null,
      (err) => {
        //error
        console.log("да я ошибка");
        console.log(err);
      },
      () => {
        //complete
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageUrl: url,
              username: username,
              read: false,
              profilePic,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            history.replace("/chats");
          });
      }
    );
  };
  useEffect(() => {
    if (!imgSrc) history.replace("/");
  }, [history, imgSrc]);
  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />
      <RightToolbar />
      <img src={imgSrc} alt="" />
      <Footer sendPost={sendPost} />
    </div>
  );
};
export default Preview;
