const initialState = {
errors : null,
};

const reducer = (state = initialState, action = {}) => {
  const { errors } = action

  switch (action.type) {
    case 'REGISTRATON_ERROR':
      return {
        ...state,
        errors
      };
    default:
      return state;
  }
}

export default reducer
