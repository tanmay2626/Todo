import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card,IconButton,InputBase } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Task from "./Task";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Note = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const HandleInput = (e) => {
    setTask(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/collection", { task });
  };

  const [head, setHead] = useState("");

  const getData = () => {
    axios.get("http://localhost:5000/collection").then((res) => {
      const val = res.data;
      setHead(val);
      setTasks(val.list);
    });
  };

  useEffect(() => {
    getData();
  }, [tasks]);

  return (
    <Container className="feed">
      <Row>
        <Col className="back-icon" sm={1} md={1} lg={1}>
          <IconButton
            component={Link}
            to="/collections"
            sx={{
              backgroundColor: "#191919",
              borderRadius: "15px",
              justifyContent: "right",
              textAlign: "right",
            }}
          >
            <ArrowBackIosIcon className="back" />
          </IconButton>
        </Col>
        <Col sm={11} md={11} lg={11}>
          <h3>{head.name}</h3>
        </Col>
      </Row>
      <Card
        className="upload"
        sx={{
          backgroundColor: "#171717",
          borderRadius: "25px",
          color: "white",
        }}
      >
        <form method="post">
          <Row className="upload-box">
            <Col className="upload-icon" sm={1} md={1} lg={1}>
              <IconButton onClick={HandleSubmit} type="submit">
                <AddBoxIcon sx={{ fontSize: 40, color: "#FA58B6" }} />
              </IconButton>
            </Col>
            <Col sm={11} md={11} lg={11} className="input">
              <InputBase
                className="input"
                onChange={HandleInput}
                name="task"
                sx={{ ml: 2, flex: 1, color: "white", width: "500px" }}
                placeholder="Add a task"
                type="text"
                autoComplete="off"
              />
            </Col>
          </Row>
        </form>
      </Card>
      <div>
        <div className="task-head">Tasks</div>
        {tasks.map((data) => {
          return (
            <motion.div layout key={data._id}>
              <Task data={data.task} id={data._id} />
            </motion.div>
          );
        })}
      </div>
    </Container>
  );
};

export default Note;
