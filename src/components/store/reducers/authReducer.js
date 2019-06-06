const initaialState = {
  authError: null
};

const authReducer = (state = initaialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login fail"
      };
    case "LOGIN_SUCCES":
      console.log("login succes");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout succes");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signUp succes");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("sigUp error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
