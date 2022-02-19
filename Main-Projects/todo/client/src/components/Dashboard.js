import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import ControlledAccordions from "./Accordian";
import axios from "axios";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [cols, setCols] = useState([]);

  const getData = () => {
    axios.get("http://localhost:5000/").then((res) => {
      const val = res.data;
      setCols(val);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <motion.div layout>
      <Container className="feed">
        <div>
          <h3>Good Morning,</h3>
          <h3>Tanmay</h3>
        </div>
        <Row className="feed-btn">
          <Col>
            <Button variant="outlined" size="large" component="span">
              Daily Overview
            </Button>
          </Col>
          <Col>
            <Button variant="outlined" size="large" component="span">
              Statistics
            </Button>
          </Col>
        </Row>
        <motion.div layout className="accordian-box">
          {cols.map((data, index) => {
            return (
              <ControlledAccordions
                key={index}
                lists={data.list}
                id={data._id}
                listName={data.name}
              />
            );
          })}
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
