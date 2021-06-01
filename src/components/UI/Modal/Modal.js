import React, { useEffect, useState } from "react";

import { Modal as BootstrapModal, Button } from "react-bootstrap";

const Modal = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.error !== null) {
      setShow(true);
    }
  }, [props.error]);

  const handleClose = () => {
    setShow(false);
    props.close();
  };

  return (
    <BootstrapModal show={show} onHide={handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>에러!</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {props.error
          ? props.error
          : "알 수 없는 에러가 발생했습니다. 다시 시도해보세요."}
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
