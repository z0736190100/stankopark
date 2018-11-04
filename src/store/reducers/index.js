import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-forms";
import testReducer from "./testReducer";

export default combineReducers({
  form: reduxFormReducer,
  test: testReducer
});
