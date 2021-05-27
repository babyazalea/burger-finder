import React, { useContext } from "react";

import { AuthContext } from "../../../../context/auth-context";

import { Button, Spinner } from "react-bootstrap";
import "./ChangePassword.css";
import { useHistory } from "react-router-dom";

const ChangePassword = () => {
  const authContext = useContext(AuthContext);

  const history = useHistory();

  const backToProfile = () => {
    history.goBack();
  };

  return (
    <div className="user-password__edit">
      {authContext.isLoading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <React.Fragment>
          <Button variant="success" onClick={authContext.sendPasswordReset}>
            비밀번호 변경 메일 보내기
          </Button>
          <Button variant="warning" onClick={backToProfile}>
            되돌아가기
          </Button>
        </React.Fragment>
      )}
    </div>
  );
};

export default ChangePassword;
