import React from "react";
import Sidenav from "./SideNav/Sidenav";

const Main = (props) => {
  console.log("chal ja bhai");
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Sidenav />
        </div>
        <div style={{ width: "100%" }}>{props.children}</div>
      </div>
    </>
  );
};

export default Main;
