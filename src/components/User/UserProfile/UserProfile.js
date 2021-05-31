import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useHttp } from "../../../hooks/http-hook";

import { AuthContext } from "../../../context/auth-context";

import Spinner from "../../UI/Spinner/Spinner";
import Modal from "../../UI/Modal/Modal";

import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./UserProfile.css";

const UserProfile = (props) => {
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [nameEditing, setNameEditing] = useState(false);
  const [sendedVerification, setSendedVerification] = useState(false);

  const { isLoading, error, initializeError, sendRequest } = useHttp();
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      setToken(props.token);
      setUserEmail(props.userEmail);
      setUserName(props.userName !== "" ? props.userName : "이름 없음");
      setPhotoUrl(props.photoUrl || null);
    }

    return () => {
      isMounted.current = true;
    };
  }, [props]);

  const toggleEditMode = () => {
    setNameEditing(!nameEditing);
  };

  const userNameHandle = (event) => {
    const {
      target: { value },
    } = event;

    setUserName(value);
  };

  const emailVerification = async () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const verifingData = {
      requestType: "VERIFY_EMAIL",
      idToken: token,
    };

    try {
      await sendRequest(url, verifingData);
      setSendedVerification(true);
    } catch (err) {
      console.log(err);
    }
  };

  const changeName = async () => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const dataForUpdate = {
      idToken: token,
      displayName: userName,
      photoUrl: "",
      deleteAttribute: ["PHOTO_URL"],
      returnSecureToken: true,
    };

    try {
      const responseData = await sendRequest(url, dataForUpdate);
      props.updateProfile(responseData);
      setNameEditing(false);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const confirmError = () => {
    initializeError();
  };

  let profile;
  if (authContext.isLoggedIn && userEmail !== null && userName !== null) {
    profile = (
      <div className="user__profile">
        <div className="user__image">
          {photoUrl !== null ? (
            <img src={photoUrl} alt="profile" />
          ) : (
            <span>
              <FontAwesomeIcon icon="user-circle" />
            </span>
          )}
        </div>
        <p className="user__email">{userEmail}</p>
        {nameEditing ? (
          <input value={userName} onChange={userNameHandle} />
        ) : (
          <p className="user__name">{userName}</p>
        )}
      </div>
    );
  } else {
    profile = (
      <div className="error-message-box">
        <p>프로필을 불러오지 못했습니다.</p>
      </div>
    );
  }

  let verficaion;
  verficaion = authContext.isVerified ? null : (
    <div className="user__email__verification">
      {sendedVerification ? (
        <p>
          인증 메일을 {userEmail}로 보냈습니다. 이메일을 확인하시고 다시 로그인
          해주세요.
        </p>
      ) : (
        <Button onClick={emailVerification}>이메일 인증 하기</Button>
      )}
    </div>
  );

  let nameEditButton;
  nameEditButton = authContext.isVerified ? (
    <div className="user-name__edit-btn">
      {nameEditing ? (
        <React.Fragment>
          <Button onClick={toggleEditMode} variant="warning">
            수정 취소
          </Button>
          <Button variant="success" onClick={changeName}>
            이대로 수정
          </Button>
        </React.Fragment>
      ) : (
        <Button onClick={toggleEditMode} variant="success">
          닉네임 수정
        </Button>
      )}
    </div>
  ) : null;

  return (
    <React.Fragment>
      <Container className="profile-container">
        {isLoading || userEmail === null || userName === null ? (
          <Spinner />
        ) : (
          <React.Fragment>
            {profile}
            <React.Fragment>
              {verficaion}
              {nameEditButton}
              {authContext.isVerified ? (
                <div className="user-password__change-btn">
                  <Link to={`/users/${authContext.userId}/reset-password`}>
                    <Button>비밀번호 변경</Button>
                  </Link>
                </div>
              ) : null}
            </React.Fragment>
          </React.Fragment>
        )}
      </Container>
      <Modal error={error} close={confirmError} />
    </React.Fragment>
  );
};

export default UserProfile;
