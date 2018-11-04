import { TEST_REDUCER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case TEST_REDUCER:
      console.log("test reducer works");
      return action.payload || false;
    default:
      return state;
  }
}
