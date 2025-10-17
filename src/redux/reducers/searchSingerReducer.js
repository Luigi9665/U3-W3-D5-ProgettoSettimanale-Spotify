import { SEARCH, ADD_SINGER } from "../action";

const initialState = {
  textSearch: "",
  searchSinger: [],
};

const searchSingerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      console.log("SEARCH");
      return {
        ...state,
        textSearch: action.payload,
      };
    case ADD_SINGER:
      console.log("ADD_SINGER");
      return {
        ...state,
        searchSinger: action.payload,
      };

    default:
      console.log("default");
      return state;
  }
};

export default searchSingerReducer;
