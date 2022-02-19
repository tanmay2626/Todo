import React from "react";
import { Row, Col } from "react-bootstrap";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const List = (props) => {
  return (
    <Row className="list">
      <Col sm={1} md={1} lg={1}>
        <CheckBoxOutlineBlankIcon sx={{ color: "#6B38A9" }} />
      </Col>
      <Col sm={11} md={11} lg={11}>
        {props.tasks}
        <p>Today 12:00</p>
      </Col>
    </Row>
  );
};

export default List;
