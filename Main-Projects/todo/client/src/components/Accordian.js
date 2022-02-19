import React, { useState } from "react";
import { Accordion,AccordionDetails,AccordionSummary,Typography,Divider,AccordionActions } from "@mui/material";
import { ExpandMoreIcon,ChevronRightTwoToneIcon } from "@mui/icons-material";
import List from "./List";

export default function ControlledAccordions(props) {
  const [expanded, setExpanded] = useState(false);
  const [cols, setCols] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setCols(props.lists);
  };

  return (
    <Accordion
      className="accordian"
      sx={{ background: "none" }}
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        sx={{
          backgroundColor: "#2B2B2B",
          color: "white",
          borderRadius: "20px 20px 0 0",
        }}
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {props.listName}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: "#171717", color: "white" }}>
        {cols.slice(0, 2).map((data) => {
          return <List key={data._id} tasks={data.task} />;
        })}
      </AccordionDetails>
      <AccordionActions className="accordian-ftr">
        <div className="accordian-ftr-in">
          <Divider />
          Go to Collection <ChevronRightTwoToneIcon />
        </div>
      </AccordionActions>
    </Accordion>
  );
}
