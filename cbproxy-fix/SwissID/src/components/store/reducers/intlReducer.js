const localeState = {
  locale: "en",
};

const intlReducer = (state = localeState, action) => {
  switch (action.type) {
    case 'SET_LOCALE':
      localStorage.setItem("locale", action.payload);
      return Object.assign({}, state, { locale: action.payload });
    default: return state;
  }
}

export default intlReducer;