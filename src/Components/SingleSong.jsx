import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addSelectAction } from "../redux/action";

const SingleSong = ({ singleSong }) => {
  const dispatch = useDispatch();

  return (
    <Col>
      <div className="text-center">
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
          <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
          <p className="m-0"> Track: {singleSong.title} </p>
          <p className="m-0"> Artist: {singleSong.artist.name} </p>
        </div>
      </div>
    </Col>
  );
};

export default SingleSong;
