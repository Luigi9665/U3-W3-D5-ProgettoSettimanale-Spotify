import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allSongsReducer from "../reducers/allSongsReducer";
import songSelectedReducer from "../reducers/songSelectedReducer";

const rootReducer = combineReducers({
  allSongs: allSongsReducer,
  selectSong: songSelectedReducer,
  // error :
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
