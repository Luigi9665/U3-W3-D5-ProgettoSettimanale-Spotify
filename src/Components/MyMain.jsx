import { Col, Container, Row } from "react-bootstrap";
import SectionSong from "./SectionSong";
import { ADD_HIPHOP, ADD_POP, ADD_ROCK } from "../redux/action";

const MyMain = () => {
  return (
    <Col xs={12} md={10}>
      <div className="mainPage">
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
        <Container>
          {/* Inseriamo le section song */}
          <SectionSong title={"Rock Classics"} artistSearch={"queen"} typeSelect={ADD_ROCK} stateSelect={"Rock"} />
          {/* Inseriamo le section song */}
          <SectionSong title={"Pop Culture"} artistSearch={"katyperry"} typeSelect={ADD_POP} stateSelect={"Pop"} />
          {/* Inseriamo le section song */}
          <SectionSong title={"#HipHop"} artistSearch={"eminem"} typeSelect={ADD_HIPHOP} stateSelect={"HipHop"} />
        </Container>
      </div>
    </Col>
  );
};

export default MyMain;
