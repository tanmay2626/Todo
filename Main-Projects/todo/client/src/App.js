import React from "react";
import NavBar from "./components/Nav";
import SideBar from "./components/Sidebar";
import { Row, Col } from "react-bootstrap";
import Dashboard from "./components/Dashboard";
import Collections from "./components/Collections";
import Note from "./components/Note";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="body-main">
      <Router>
        <NavBar />
        <Row className="main">
          <Col sm={4} md={4} lg={4}>
            <SideBar />
          </Col>
          <Col sm={8} md={8} lg={8}>
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/collections" exact element={<Collections />} />
              <Route path="/collection" exact element={<Note />} />
            </Routes>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
