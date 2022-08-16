import React, { useState } from "react";

const TriggerPopup = ({ changeState }) => {
  return <button onClick={changeState}>Open Popup</button>;
};

export default TriggerPopup;
