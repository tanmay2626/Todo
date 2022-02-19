import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card,IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import axios from "axios";
import { motion } from "framer-motion";

const Task = (props) => {
  const HandleSubmit = (e) => {
    e.preventDefault();

    const itemID = props.id;

    axios.post("http://localhost:5000/delete", { itemID });
  };

  return (
    <motion.div whileHover={{ opacity: 0.8, scale: 1.05 }}>
      <Card
        className="task"
        sx={{
          backgroundColor: "#171717",
          borderRadius: "25px",
          color: "white",
        }}
      >
        <Row className="task-box">
          <Col className="task-icon" sm={1} md={1} lg={1}>
            <form onClick={HandleSubmit} method="post">
              <IconButton id={props.id} type="submit">
                <CheckBoxOutlineBlankIcon
                  sx={{ color: "#FA58B6", fontSize: 40 }}
                />
              </IconButton>
            </form>
          </Col>
          <Col className="task-txt" sm={11} md={11} lg={11}>
            {props.data}
            <p>Today 12:00</p>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
};

export default Task;
