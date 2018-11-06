import { FETCH_USER } from "store/actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      //LOGGER
      console.log(
        "\n < authReducer.js:6 > case FETCH_USER --> action.payload = \n"
      );
      console.log(action.payload);
      // END LOGGER
      return action.payload || false;
    default:
      return state;
  }
}
