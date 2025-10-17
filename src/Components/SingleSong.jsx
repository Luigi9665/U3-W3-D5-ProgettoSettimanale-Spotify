import { Col } from "react-bootstrap";

const SingleSong = ({ singleSong }) => {
  return (
    <Col>
      <div className="text-center">
        <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
        <p className="m-0"> Track: {singleSong.title} </p>
        <p className="m-0"> Artist: {singleSong.artist.name} </p>
      </div>
    </Col>
  );
};

export default SingleSong;
