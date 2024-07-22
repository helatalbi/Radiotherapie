import React, { useState } from "react";
import Modal from "react-modal";
import NoteTime from "./noteTime";
import "./Notes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faFilePen,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import SpeechToTextDemo from "./speachToText";
import NoteManuel from "./noteManuel";
import ChatComponent from "./ChatComponent";

function NoteNew({ report, setReport, userData, handleValueClick }) {
  const [selectedIcon, setSelectedIcon] = useState("microphone");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);
  const [newNoteTime, setNewNoteTime] = useState("");

  const handleNoteTimeSelect = (noteTime) => {
    setNewNoteTime(noteTime);
  };

  const openModalNoteTime = (modalType) => {
    setSelectedModal(modalType);
    setModalIsOpen(true);
  };
  const closeModalNoteTime = () => {
    setSelectedModal(null);
    setModalIsOpen(false);
  };

  const renderComponent = () => {
    switch (selectedIcon) {
      case "microphone":
        return <SpeechToTextDemo userData={userData} />;
      case "pen":
        return (
          <NoteManuel
            report={report}
            setReport={setReport}
            userData={userData}
            handleValueClick={handleValueClick}
          />
        );
      case "robot":
        return <ChatComponent userData={userData} />;
      default:
        return null;
    }
  };

  return (
    <div className="cardNote">
      <div className="contentNote">
        <div className="choixOutil">
          {["microphone", "pen", "robot"].map((icon) => (
            <button
              key={icon}
              className={`btnNote ${selectedIcon === icon ? "active" : ""}`}
              onClick={() => setSelectedIcon(icon)}
            >
              <FontAwesomeIcon
                icon={
                  icon === "pen"
                    ? faFilePen
                    : icon === "microphone"
                    ? faMicrophone
                    : faRobot
                }
              />
            </button>
          ))}
        </div>
        <div className="type" style={{ marginTop: -465, marginLeft: 410 }}>
          <input type="radio" name="selecttype" id="privé" checked={true} />
          <input type="radio" name="selecttype" id="publique" />
          <label for="privé" className="optiontype privé">
            <span>privé</span>
          </label>
          <label for="publique" className="optiontype publique">
            <span>publique</span>
          </label>
        </div>
        <div className="titreNote">
          <div className="titreNotetitre">titre</div>
          <input
            className="inputtitreNote"
            type="search"
            placeholder="Entrer un titre pour votre note"
          />
        </div>
        <div className="rapportGenerer">{renderComponent()}</div>
        <div className="actions-row" style={{ marginTop: -30 }}>
          <button
            className="ajouterNote"
            onClick={() => openModalNoteTime("noteTime")}
            style={{ marginLeft: 115, width: 400, height: 40 }}
          >
            choisir date et temps pour vous rappeler du note
          </button>
          <input
            className="inputNoteTime"
            type="text"
            value={newNoteTime}
            onChange={(e) => setNewNoteTime(e.target.value)}
          />{" "}
          <button
            className="ajouterNote"
            style={{ marginLeft: -40, width: 150, height: 40 }}
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Note</span>
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen && selectedModal === "noteTime"}
        onRequestClose={closeModalNoteTime}
        contentLabel="Note Time Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <NoteTime
          closeModal={closeModalNoteTime}
          onNoteTimeSelect={handleNoteTimeSelect}
        />
      </Modal>
    </div>
  );
}

export default NoteNew;
