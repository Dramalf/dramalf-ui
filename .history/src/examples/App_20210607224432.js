import React from "react";
import { AvatarShot } from "../lib";
import {TextInput} from "avatarshot"
const App = () => (
  <div style={{ width: 640, margin: "15px auto",color:"#e65" }}>
    <h1 >Example Display</h1>
    <AvatarShot id="as" onClick={(e) => {
      console.log(e.target)
    }}/>
  </div>
);

export default App;