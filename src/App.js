import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import Preview from "./components/Preview/Preview.js";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app_body">
          <Switch>
            <Route path="/" exact>
              <WebcamCapture />
            </Route>
            <Route path="/preview" component={Preview} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
