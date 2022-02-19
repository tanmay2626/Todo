import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { IconButton } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const Collection = (props) => {
  const HandleSubmit = (e) => {
    const idName = props.id;

    axios.post("http://localhost:5000/collections", { idName });
  };

  return (
    <Container>
      <form method="post" onClick={HandleSubmit}>
        <IconButton
          id={props.id}
          type="submit"
          component={Link}
          to="/collection"
        >
          <Row className="col">
            <Col className="col-box" sm={3} md={3} lg={3}>
              <LabelImportantIcon className="col-icon" sx={{ fontSize: 40 }} />
            </Col>
            <Col sm={9} md={9} lg={9}>
              {props.listName}
            </Col>
          </Row>
        </IconButton>
      </form>
    </Container>
  );
};

export default Collection;
