import React from "react";
import {
  requiredValidation,
  emailValidation,
  passwordValidation,
} from "./validations";

const TextInput = (props) => {
  const [error, setError] = React.useState("");
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (props.requiredValidation) {
      props.setDisabled(Boolean(error) || !Boolean(value));
    } else {
      props.setDisabled(Boolean(error));
    }
    return () => {
      props.setDisabled(false);
    };
  });

  const changeHandler = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (props.requiredValidation) {
      if (requiredValidation(newValue)) {
        setError(requiredValidation(newValue));
        props.onChange(event);
        return;
      }
    }
    if (props.emailValidation) {
      if (emailValidation(newValue)) {
        setError(emailValidation(newValue));
        props.onChange(event);
        return;
      }
    }
    if (props.passwordValidation) {
      if (passwordValidation(newValue)) {
        setError(passwordValidation(newValue));
        props.onChange(event);
        return;
      }
    }
    props.onChange(event);
    props.setDisabled(false);
    setError("");
  };

  return (
    <div>
      <div>{props.children}</div>
      <input onChange={changeHandler} value={props.value} />
      {error && <div>{error}</div>}
    </div>
  );
};

export default TextInput;
