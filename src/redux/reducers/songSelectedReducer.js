import { ADD_SELECT } from "../action";

const initialState = {
  content: null,
};

const songSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECT:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default songSelectedReducer;
