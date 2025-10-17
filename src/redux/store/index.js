import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allSongsReducer from "../reducers/allSongsReducer";
import songSelectedReducer from "../reducers/songSelectedReducer";
import searchSingerReducer from "../reducers/searchSingerReducer";
import favoriteReducers from "../reducers/favoriteReducer";

const rootReducer = combineReducers({
  allSongs: allSongsReducer,
  selectSong: songSelectedReducer,
  searchInput: searchSingerReducer,
  favorites: favoriteReducers,
  // error :
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
