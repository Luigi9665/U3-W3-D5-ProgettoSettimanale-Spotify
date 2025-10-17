export const SET_ERROR_ON = "SET_ERROR_ON";
export const SET_ERROR_OFF = "SET_ERROR_OFF";
export const SET_ERROR_MSG = "SET_ERROR_MSG";
export const ADD_ROCK = "ADD_ROCK";
export const ADD_POP = "ADD_POP";
export const ADD_HIPHOP = "ADD_HIPHOP";
export const ADD_SELECT = "ADD_SELECT";

export const addSelectAction = (data) => ({ type: ADD_SELECT, payload: data });

export const addSongAction = (artistName, typeSelect) => {
  return async (dispatch, getState) => {
    console.log(getState);
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        let dataReduce = [];
        for (let i = 0; i < 4; i++) {
          dataReduce.push(data[i]);
        }
        dispatch({ type: typeSelect, payload: dataReduce });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
