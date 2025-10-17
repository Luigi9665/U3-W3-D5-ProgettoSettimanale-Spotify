import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allSongsReducer from "../reducers/allSongsReducer";

const rootReducer = combineReducers({
  // selectSong :
  allSongs: allSongsReducer,
  // error :
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
