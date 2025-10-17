import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { addSongAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import SingleSong from "./SingleSong";

const SectionSearchSong = ({ title, artistSearch, typeSelect, stateSelect }) => {
  const dispatch = useDispatch();

  const searchInput = useSelector((state) => state.searchInput.textSearch);

  const resultOfSearch = useSelector((state) => state.searchInput[stateSelect]);

  useEffect(() => {
    dispatch(addSongAction(artistSearch, typeSelect));
  }, [searchInput]);

  return (
    <Row className="my-5">
      <Col xs={10}>
        <div>
          <h2 className="text-white">{title}</h2>
          <div className="imgLinks py-3">
            <Row xs={1} sm={2} lg={3} xl={4}>
              {resultOfSearch.map((singleSong) => (
                <SingleSong key={singleSong.id} singleSong={singleSong} />
              ))}
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SectionSearchSong;
