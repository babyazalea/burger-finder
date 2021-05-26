import React, { useContext } from "react";

import { AuthContext } from "../../../../context/auth-context";

import { Button, Spinner } from "react-bootstrap";
import "./ChangePassword.css";

const ChangePassword = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="user-password__edit">
      {authContext.isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <React.Fragment>
          <Button variant="success" onClick={authContext.sendPasswordReset}>
            비밀번호 바꾸어봅시다
          </Button>
          <Button variant="danger">비밀번호 취소</Button>
        </React.Fragment>
      )}
    </div>
  );
};

export default ChangePassword;
