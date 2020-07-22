import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import TextInput from "../TextInput";
import { logIn } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const [isDisabledEmail, setDisabledEmail] = React.useState(false);
  const [isDisabledPassword, setDisabledPassword] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const changeHandler = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="auth-block">
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
      <Link to="/" className="auth-sign-button">
        <button
          onClick={() => {
            dispatch(logIn(values.email, values.password));
            history.push("/");
          }}
          disabled={isDisabledEmail || isDisabledPassword}
        >
          Sign in
        </button>
      </Link>
    </div>
  );
};

export default Auth;
