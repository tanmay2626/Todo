import React from "react";
import { Card,CardContent,CardActions } from "@mui/material/Card";
import { PostAddRoundedIcon,IconButton } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BasicCard(props) {
  const HandleSubmit = () => {
    const idName = props.id;

    axios.post("http://localhost:5000/collections", { idName });
  };

  return (
    <form method="post" onClick={HandleSubmit}>
      <IconButton type="submit" id={props.id} component={Link} to="/collection">
        <Card
          className="card"
          sx={{
            backgroundColor: "#171717",
            borderRadius: "30px",
            color: "white",
          }}
        >
          <CardContent className="card-icon">
            <PostAddRoundedIcon sx={{ fontSize: 120 }} />
          </CardContent>
          <CardActions className="card-name">{props.listName}</CardActions>
        </Card>
      </IconButton>
    </form>
  );
}
