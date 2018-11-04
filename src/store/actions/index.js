import { TEST_REDUCER } from "./types";

export const testReducerAction = () => dispatch => {

  const payload = "test reducer action payload";
  console.log(payload);

  dispatch({
    type: TEST_REDUCER,
    payload: payload
  });
};
