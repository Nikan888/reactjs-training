import { INITIALIZE_USER, LOGIN, LOGOUT } from "../actionsTypes";

const adminCredentials = {
  login: "testAdmin@gmail.com",
  password: "12345yuiopp",
};

const initialState = { login: "", isAdmin: false, isLogged: false };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_USER: {
      return JSON.parse(sessionStorage.user);
    }
    case LOGIN: {
      const { login, password } = { ...action };
      const isAdmin =
        adminCredentials.login === login &&
        adminCredentials.password === password;
      const newState = { login, isAdmin, isLogged: true };

      sessionStorage.setItem("user", JSON.stringify(newState));
      return newState;
    }
    case LOGOUT: {
      sessionStorage.removeItem("user");
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
