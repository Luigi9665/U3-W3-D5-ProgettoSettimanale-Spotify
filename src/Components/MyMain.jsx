import { Col, Container, Row } from "react-bootstrap";
import SectionSong from "./SectionSong";
import { ADD_HIPHOP, ADD_POP, ADD_ROCK, ADD_SINGER } from "../redux/action";
import { useSelector } from "react-redux";
import SectionSearchSong from "./SectionSearchSong";

const MyMain = () => {
  const searched = useSelector((state) => state.searchInput.textSearch);

  return (
    <Col xs={12} md={10} className="text-center">
      <div className="mainPage">
        <Container>
          <Row>
            <Col className="d-none d-md-flex  ">
              <div className=" mainLinks w-100 d-flex justify-content-around">
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </div>
            </Col>
          </Row>
          <Container className="text-start">
            {searched && (
              // Inseriamo le section song
              <SectionSearchSong title="New Results" artistSearch={searched} typeSelect={ADD_SINGER} stateSelect="searchSinger" />
            )}

            {/* Inseriamo le section song */}
            <SectionSong title={"Rock Classics"} artistSearch={"queen"} typeSelect={ADD_ROCK} stateSelect={"Rock"} />
            {/* Inseriamo le section song */}
            <SectionSong title={"Pop Culture"} artistSearch={"katyperry"} typeSelect={ADD_POP} stateSelect={"Pop"} />
            {/* Inseriamo le section song */}
            <SectionSong title={"#HipHop"} artistSearch={"eminem"} typeSelect={ADD_HIPHOP} stateSelect={"HipHop"} />
          </Container>
        </Container>
      </div>
    </Col>
  );
};

export default MyMain;
