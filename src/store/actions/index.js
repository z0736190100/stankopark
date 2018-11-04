import { TEST_REDUCER } from "./types";

export const testReducerAction = () => dispatch => {

  const payload = "action test reducer";
  console.log(payload);

  dispatch({
    type: TEST_REDUCER,
    payload: payload
  });
};
