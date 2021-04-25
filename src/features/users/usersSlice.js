const initialState = {
  users: [],
};
// While action types allow you tell your reducer what action it should take, the payload is the data that your reducer will use to update the state. This lesson shows you how to pass an action payload along with your action type to update the state.
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/add":
      console.log("adding ", action.payload);
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
}

export default usersReducer;
