export const requiredValidation = (value) => (value ? undefined : "Required");

export const emailValidation = (value) =>
  /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/gi.test(value)
    ? undefined
    : "Incorrect email";

export const passwordValidation = (value) => {
  const anyLetter = /[a-z]/gi;
  const anyNumber = /[0-9]/gi;

  if (!anyLetter.test(value)) {
    return "At least one letter";
  }
  if (!anyNumber.test(value)) {
    return "At least one number";
  }
  if (value.length < 8) {
    return "Less than eight symbols";
  }
  return false;
};
