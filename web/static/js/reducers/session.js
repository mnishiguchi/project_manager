// Here, we define session-related state reducer.
// - currentUser: set after authenticating visitors
// - socket:      used for connecting to channels
// - error:       allows us to keep track of authentication errors
const initialState = {
  currentUser: null,
  socket:      null,
  error:       null,
};

export default function sessionReducer(state = initialState, action = {}) {
  return state;
}
