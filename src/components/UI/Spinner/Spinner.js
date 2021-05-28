import React from "react";

import { Spinner as BootstrapSpinner } from "react-bootstrap";

const Spinner = () => {
  return (
    <BootstrapSpinner animation="border" variant="light" role="status">
      <span className="sr-only">Loading...</span>
    </BootstrapSpinner>
  );
};

export default Spinner;
