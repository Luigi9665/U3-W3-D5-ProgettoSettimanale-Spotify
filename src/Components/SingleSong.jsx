import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addSelectAction, addToFavoriteAction, removeFromFavoriteAction } from "../redux/action";
import { HeartFill } from "react-bootstrap-icons";
// import { useEffect, useState } from "react";

const SingleSong = ({ singleSong }) => {
  // const [favorite, setFavorite] = useState(false);

  const dispatch = useDispatch();

  const allFavorites = useSelector((state) => state.favorites.content);

  // const ifInFavorites = () => {
  //   allFavorites.forEach((song) => {
  //     if (singleSong.title === song.title) {
  //       setFavorite(true);
  //     }
  //   });
  // };

  const favControl = () => {
    return allFavorites.find((fav) => singleSong.id === fav.id);
  };

  const starClick = () => {
    if (favControl()) {
      dispatch(removeFromFavoriteAction(singleSong));
    } else {
      dispatch(addToFavoriteAction(singleSong));
    }
  };

  // useEffect(() => {
  //   // setFavorite(false);
  //   ifInFavorites();
  // }, [allFavorites]);

  return (
    <Col>
      <div style={{ userSelect: "none" }} className="text-center">
        <div>
          <img
            className="img-fluid"
            src={singleSong.album.cover_medium}
            alt="track"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(addSelectAction(singleSong))}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
          <div className="d-flex justify-content-center align-items-center gap-2">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(addSelectAction(singleSong))}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <p className="m-0"> Track: {singleSong.title} </p>
              <p className="m-0"> Artist: {singleSong.artist.name} </p>
            </div>
            <HeartFill style={{ cursor: "pointer" }} className={`fs-3 ${favControl() ? "text-danger" : "text-white"} `} onClick={starClick} />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleSong;
