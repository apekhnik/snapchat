import React from "react";
import "./index.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase";
import { login } from "../../features/appSlice";
const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch(
          login({
            username: res.user.displayName,
            profilePic: res.user.photoURL,
            id: res.user.uid,
          })
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
        <Button variant="outlined" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};
export default Login;
