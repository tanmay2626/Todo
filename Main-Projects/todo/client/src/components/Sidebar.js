import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Collection from "./Collection";
import axios from "axios";

const SideBar = () => {
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
    <div className="side">
      <Container className="side-cont">
        <div className="side-head">
          <h3>Collections</h3>
        </div>
        {cols.map((data, index) => {
          return (
            <div key={index}>
              <Collection id={data._id} listName={data.name} />
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default SideBar;
