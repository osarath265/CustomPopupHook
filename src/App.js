import { Modal } from "@mui/material";
import "./styles.css";
import TriggerPopup from "./TriggerPopup/TriggerPopup";
import BasicModal from "./Modal.js";
import React, { useEffect, useState } from "react";
import useConfirm from "./useConfirm";

export default function App() {
  const { confirm, WrappedModal } = useConfirm();

  const openModal = async () => {
    const boolCheck = await confirm();

    if (boolCheck) {
      console.log("User clicked yes");
    } else {
      console.log("User Clicked No");
    }
  };

  return (
    <div className="App">
      <TriggerPopup changeState={openModal} />
      <WrappedModal />
    </div>
  );
}
