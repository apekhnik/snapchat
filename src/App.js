import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import Preview from "./components/Preview/Preview.js";
import Chats from "./components/Chats/Chats";
import ChatView from "./components/Chats/View";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
