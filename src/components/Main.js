import React from "react";
import Sidenav from "./SideNav/Sidenav";

const Main = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Sidenav />
        </div>
        <div style={{ width: "100%", minHeight: "100vh" }}>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Main;
