import React from "react";
import { AvatarShot } from "../lib";
import {TextInput} from "avatarshot"
const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1 onClick={() => {
      console.log(document.getElementById("as"))
    }}>Hello React</h1>
    <AvatarShot id="as"/>
  </div>
);

export default App;