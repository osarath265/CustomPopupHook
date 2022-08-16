import { useState } from "react";
import BasicModal from "./Modal";

function useConfirm() {
  const [promiseObj, setPromiseObj] = useState({});
  const [openState, setToggleOpenState] = useState(false);

  const promiseArray = {};
  const confirm = () => {
    setToggleOpenState((prev) => !prev);
    return new Promise((resolve, reject) => {
      promiseArray["resolve"] = resolve;
      promiseArray["reject"] = reject;
      setPromiseObj(promiseArray);
    });
  };

  const WrappedModal = () => {
    return (
      <BasicModal
        openState={openState}
        handleClose={setToggleOpenState}
        resolver={promiseObj.resolve}
        rejector={promiseObj.reject}
      />
    );
  };
  return { confirm, WrappedModal };
}
export default useConfirm;
