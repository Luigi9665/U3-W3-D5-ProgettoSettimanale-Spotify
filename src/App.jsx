// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Container, Row } from "react-bootstrap";
import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import MyMain from "./Components/MyMain";
import Player from "./Components/Player";

function App() {
  return (
    <Container fluid>
      <Row>
        <MyNavbar />
        <MyMain />
        <Player />
      </Row>
    </Container>
  );
}

export default App;
