import React, { useReducer, useState } from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";
import styles from "./Register.module.css";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const Fields = (props) => {
  const { dispatch, id, type, label, errorState } = props;

  const inputHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const actionType = id;
    dispatch({ type: actionType, payload: value });
  };

  const errorObj = errorState.find((item) => item.id === id);
  const errMessage = errorObj.error;
  const status = errorObj.status;

  return (
    <div
      className={classNames(styles.fields, {
        [styles.success]: status === "success",
        [styles.error]: status === "error",
      })}
    >
      <label htmlFor={id}>{label}</label>
      <input onChange={inputHandler} id={id} type={type} autoComplete="off" />
      <small>{errMessage}</small>
    </div>
  );
};

const userInfoReducer = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "confirmPassword":
      return { ...state, confirmPassword: action.payload };
    default:
      throw new Error();
  }
};

const initialState = {
  username: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = (props) => {
  const [userInfoState, dispatchUserInfo] = useReducer(
    userInfoReducer,
    initialState
  );
  const [errState, setErrState] = useState([
    { id: "username", error: "", status: "" },
    { id: "phone", error: "", status: "" },
    { id: "email", error: "", status: "" },
    { id: "password", error: "", status: "" },
    { id: "confirmPassword", error: "", status: "" },
  ]);

  const isRequired = (value) => {
    return value === "" ? false : true;
  };

  const isBetween = (length, min, max) => {
    return length < min || length > max ? false : true;
  };

  const showError = (elementId, errorMsg) => {
    const foundObj = errState.find((item) => item.id === elementId);
    setErrState((oldState) => {
      return [
        ...oldState,
        (foundObj.error = errorMsg),
        (foundObj.status = "error"),
      ];
    });
  };

  const showSuccess = (elementId, successMsg) => {
    const foundObj = errState.find((item) => item.id === elementId);
    setErrState((oldState) => {
      return [
        ...oldState,
        (foundObj.error = successMsg),
        (foundObj.status = "success"),
      ];
    });
  };

  const isEmailValid = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regex.test(email);
  };

  const isPasswordSecure = (password) => {
    const regex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return regex.test(password);
  };

  const isPhoneValid = (phone) => {
    return phone.length === 10 ? true : false;
  };

  const checkUsername = () => {
    let valid = false;
    const min = 3,
      max = 25;
    const username = userInfoState.username.trim();

    if (!isRequired(username)) {
      showError("username", "Username can't be blank");
    } else if (!isBetween(username.length, min, max)) {
      showError(
        "username",
        `Username must be between ${min} and ${max} characters`
      );
    } else {
      showSuccess("username", "");
      valid = true;
    }
    return valid;
  };

  const checkPhone = () => {
    let valid = false;
    const phone = userInfoState.phone.trim();
    // console.log(phone);

    if (!isRequired(phone)) {
      showError("phone", "Phone can't be blank");
    } else if (!isPhoneValid(phone)) {
      showError("phone", "Phone number must have only 10 digits");
    } else {
      showSuccess("phone", "");
      valid = true;
    }
    return valid;
  };

  const checkEmail = () => {
    let valid = false;
    const email = userInfoState.email.trim();

    if (!isRequired(email)) {
      showError("email", "Email can't be blank");
    } else if (!isEmailValid(email)) {
      showError("email", "Email is not valid");
    } else {
      showSuccess("email", "");
      valid = true;
    }
    return valid;
  };

  const checkPassword = () => {
    let valid = false;
    const password = userInfoState.password.trim();

    if (!isRequired(password)) {
      showError("password", "Password can't be blank");
    } else if (!isPasswordSecure(password)) {
      showError(
        "password",
        "Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*)"
      );
    } else {
      showSuccess("password", "");
      valid = true;
    }

    return valid;
  };

  const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = userInfoState.confirmPassword.trim();
    const password = userInfoState.password.trim();

    if (!isRequired(confirmPassword)) {
      showError("confirmPassword", "Confirm password can't be blank");
    } else if (password !== confirmPassword) {
      showError("confirmPassword", "Confirm password does not match");
    } else {
      showSuccess("confirmPassword", "");
      valid = true;
    }
    return valid;
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    // validate form
    let isUsernameValid = checkUsername(),
      isPhoneValid = checkPhone(),
      isEmailValid = checkEmail(),
      isPasswordValid = checkPassword(),
      isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid =
      isUsernameValid &&
      isPhoneValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid;

    // submit to the server if form is valid
    if (isFormValid) {
      // make POST request to the server
    }
  };

  return ReactDOM.createPortal(
    <React.Fragment>
      <Backdrop />
      <form id={styles.form} onSubmit={submitFormHandler}>
        <h1>Sign Up</h1>
        <Fields
          dispatch={dispatchUserInfo}
          id="username"
          type="text"
          label="Username "
          errorState={errState}
        />
        <Fields
          dispatch={dispatchUserInfo}
          id="phone"
          type="number"
          label="Phone "
          errorState={errState}
        />
        <Fields
          dispatch={dispatchUserInfo}
          id="email"
          type="text"
          label="Email "
          errorState={errState}
        />
        <Fields
          dispatch={dispatchUserInfo}
          id="password"
          type="text"
          label="Password "
          errorState={errState}
        />
        <Fields
          dispatch={dispatchUserInfo}
          id="confirmPassword"
          type="text"
          label="Confirm Password "
          errorState={errState}
        />
        <button type="submit" id={styles.btn}>
          Sign Up
        </button>
        <small id={styles.small}>
          Already registered?
          <button
            onClick={() => {
              props.signIn();
            }}
            id={styles.signInBtn}
          >
            Sign In
          </button>
        </small>
      </form>
    </React.Fragment>,
    document.getElementById("portal")
  );
};

export default Register;
