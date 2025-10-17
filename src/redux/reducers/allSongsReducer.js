import { ADD_HIPHOP, ADD_POP, ADD_ROCK } from "../action";

const initialState = {
  Rock: [],
  Pop: [],
  HipHop: [],
};

const allSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCK:
      console.log("ADD_ROCk");
      return {
        ...state,
        Rock: action.payload,
      };
    case ADD_POP:
      console.log("ADD_POP");
      return {
        ...state,
        Pop: action.payload,
      };
    case ADD_HIPHOP:
      console.log("ADD_HIPHOP");
      return {
        ...state,
        HipHop: action.payload,
      };

    default:
      console.log("default");
      return state;
  }
};

export default allSongsReducer;
