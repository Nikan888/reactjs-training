import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import TextInput from "../TextInput";

const Auth = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const [isDisabledEmail, setDisabledEmail] = React.useState(false);
  const [isDisabledPassword, setDisabledPassword] = React.useState(false);

  const changeHandler = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <TextInput
        onChange={changeHandler("email")}
        requiredValidation
        emailValidation
        setDisabled={setDisabledEmail}
      >
        Login:{" "}
      </TextInput>
      <TextInput
        onChange={changeHandler("password")}
        requiredValidation
        passwordValidation
        setDisabled={setDisabledPassword}
      >
        Password:{" "}
      </TextInput>
      <Link to="/">
        <button disabled={isDisabledEmail || isDisabledPassword}>
          Sign in
        </button>
      </Link>
    </div>
  );
};

export default Auth;
