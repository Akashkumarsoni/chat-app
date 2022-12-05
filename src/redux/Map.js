import { send_action } from "./Actions";

export const mappropstostate = (state) => {
  return { ...state };
};

export const mappropstodispatch = (dispatch) => {
  return {
    send_msg: (e) => dispatch(send_action(e)),
  };
};
