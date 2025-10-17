import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { addSongAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import SingleSong from "./SingleSong";

const SectionSong = ({ title, artistSearch, typeSelect, stateSelect }) => {
  const dispatch = useDispatch();

  const resultOfSearch = useSelector((state) => state.allSongs[stateSelect]);

  useEffect(() => {
    dispatch(addSongAction(artistSearch, typeSelect));
  }, []);

  return (
    <Row className="my-5">
      <Col xs={10}>
        <div>
          <h2 className="text-white">{title}</h2>
          <div className="imgLinks py-3">
            <Row xs={1} sm={2} lg={3} xl={4}>
              {resultOfSearch.map((singleSong, index) => (
                <SingleSong key={artistSearch + index} singleSong={singleSong} />
              ))}
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SectionSong;
