import { Col, Container, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const Player = () => {
  const select = useSelector((state) => state.selectSong.content);

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed-bottom bg-container pt-1">
      <Container fluid>
        <Row className="h-100">
          {select && (
            <Col xs={1} lg={2} className="offset-lg-2">
              <div className="d-flex flex-column align-items-center">
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <img
                    className="rounded-circle"
                    style={{ width: "50px" }}
                    src={`https://cdn-images.dzcdn.net/images/cover/${select.md5_image}/500x500.jpg`}
                    alt="track selected"
                  />
                  <p className="text-white m-0">{formatDuration(select.duration)}</p>
                </div>
                <p className="text-white text-center w-100 m-0">{select.title_short}</p>
              </div>
            </Col>
          )}
          <Col xs={11} lg={6} className={`${select ? "" : "offset-lg-2"} `}>
            {/* <div className="offset-lg-2">
              <Row className="h-100">
                <div className=" d-flex flex-column justify-content-center align-items-center">
                  <Col xs={6} md={4}> */}
            <div className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
            {/* </Col>
                </div>
              </Row>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;
