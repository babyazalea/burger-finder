import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../context/auth-context";

import { Modal as BootStrapModal, Button } from "react-bootstrap";

const Modal = (props) => {
  const [show, setShow] = useState(false);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (props.error !== null) {
      setShow(true);
    }
  }, [props.error]);

  const handleClose = () => {
    setShow(false);
    authContext.infitializeError();
  };

  return (
    <BootStrapModal show={show} onHide={handleClose}>
      <BootStrapModal.Header closeButton>
        <BootStrapModal.Title>에러!</BootStrapModal.Title>
      </BootStrapModal.Header>
      <BootStrapModal.Body>
        {props.error
          ? props.error
          : "알 수 없는 에러가 발생했습니다. 다시 시도해보세요."}
      </BootStrapModal.Body>
      <BootStrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </BootStrapModal.Footer>
    </BootStrapModal>
  );
};

export default Modal;
