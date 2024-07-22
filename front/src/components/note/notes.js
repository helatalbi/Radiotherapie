import React from "react";
import Nav from "../nav"; // Ensure the import path is correct
import "./Notes.css";
import { Layout, theme } from "antd";
import NoteNew from "./noteNew";
import CalendrierNote from "./calendrierNote";

const { Content } = Layout;

function Notes() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Nav />

      <div style={{ marginTop: -750, marginLeft: 20 }}>
        <NoteNew />
      </div>
      <div style={{ marginLeft: 1030, marginTop: -600 }}>
        <CalendrierNote />
      </div>
    </div>
  );
}

export default Notes;
