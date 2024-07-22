import React, { useState, useEffect } from "react";

import axios from "axios";
import "./style/listCentreTraitement.css";
import LeftBar from "./leftBar";
import backoffice from "../../assets/images/backoffice.png";

const Statistques = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backoffice})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      {" "}
      <LeftBar></LeftBar>
      <div style={{ display: "flex" }}>
        <div className="containerSideMap">
          <div className="listeCentre">statistiques</div>
          <div id="listings" className="listings"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistques;
