import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import Preview from "./components/Preview/Preview.js";
import Chats from "./components/Chats/Chats";
import Login from "./components/Login/Login ";
import ChatView from "./components/Chats/View";
import { useSelector, useDispatch } from "react-redux";
import { getUser, login, logout } from "./features/appSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else dispatch(logout());
    });
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <div className="app_body">
            <Switch>
              <Route path="/chats/view" exact component={ChatView} />
              <Route path="/chats">
                <Chats />
              </Route>
              <Route path="/" exact>
                <WebcamCapture />
              </Route>
              <Route path="/preview">
                <Preview />
              </Route>
            </Switch>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
