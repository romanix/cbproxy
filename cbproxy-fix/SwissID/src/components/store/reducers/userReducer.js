
const initialState = {
  userInfo: {
    email: "",
    name: "",
    isAuthenticated: false,
  },
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_CREATED':
      console.log('usercreated');
      return state;
    case 'USER_CREATED_ERROR':
      console.log('error');
      return state;
    case 'SET_USER_ACCOUNT':
      return Object.assign({}, state, { userInfo: action.payload });
    case 'ACCOUNT_CREATED':
      return state;
    case 'ACCOUNT_CREATED_ERROR':
      return state;
    case 'ACCOUNT_INACTIVE':
      return Object.assign({}, state, { account_status: "inactive" });
    case 'SET_VERIFY_INFO':
      console.log("set verify info", action.payload);
      return state;
    case 'SET_USER_ACCOUNT_INFO':
      return Object.assign({}, state, { accountInfo: action.payload });
    case 'SET_USER_MESSAGEID':
      return Object.assign({}, state, { messageId: action.payload.messageId });
    case 'LOGON':
      return Object.assign({}, state, { isAuthenticated: true });
    case 'LOGON_ERROR':
      return state;
    case 'USER_LOGOUT':
      return state;
    case 'USER_LOGOUT_ERROR':
      return state;
    default:
      return state;
  }
}

export default userReducer;