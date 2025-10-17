import { Col, Container, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchAction } from "../redux/action";

const MyNavbar = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSearchAction(query));
    setQuery("");
  };

  return (
    <Col md={2} className="d-none d-lg-block">
      <Nav className="navbar navbar-expand-md fixed-left justify-content-between">
        <Container>
          <div className="d-flex flex-column align-items-start">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Spotify Logo" style={{ width: "131px", height: "40px" }} />
            </a>
            <div className="navbar-nav d-flex flex-column">
              <div>
                <ul>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center text-white-50 linkNav" href="#">
                      <HouseDoorFill className="fs-3" />
                      <p className="fs-5 m-0 ms-2">Home</p>
                    </a>
                  </li>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center text-white-50 linkNav" href="#">
                      <BookFill className="fs-3" />
                      <p className="fs-5 m-0 ms-2">Your Library</p>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="input-group mt-3">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
                </div>
              </div> */}
              <form className="input-group mt-3" onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" value={query} onChange={handleChange} />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary btn-sm h-100" type="submit">
                    GO
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
        <Container>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>
            <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </div>
        </Container>
      </Nav>
    </Col>
  );
};

export default MyNavbar;
