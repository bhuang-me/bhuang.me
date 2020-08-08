import React from "react"
import TimelineCard from "./timelinecard.js"
import TimelineNode from "./timelinenode.js"

const edgeStyle = {
  width: "3200px",
  height: "10px",
  backgroundColor: "#70fefc",
  position: "relative",
}

export default function Timeline() {
  return (
    <div style={edgeStyle}>
      <TimelineNode label="SUMMER 2017" style={{ left: "0px" }}>
        <TimelineCard
          title="IT Intern @ Michael Kors"
          date="SUMMER 2017"
          projectType="internship"
          desc="some project I did"
          img={require("./images/discord.jpg")}
        />
      </TimelineNode>
      <TimelineNode label="WINTER 2018" style={{ left: "400px" }}>
        <TimelineCard
          title="Marketing Intern @ Broadsign"
          date="WINTER 2018"
          projectType="internship"
          desc="some project I did"
          img={require("./images/discord.jpg")}
          orientation="up"
        />
      </TimelineNode>
      <TimelineNode label="WINTER 2019" style={{ left: "800px" }}>
        <TimelineCard
          title="Software Intern @ Accedian Networks"
          date="WINTER 2018"
          projectType="internship"
          desc="some project I did"
          img={require("./images/discord.jpg")}
        />
      </TimelineNode>
      <TimelineNode style={{ left: "1200px" }}>
        <TimelineCard orientation="up" />
      </TimelineNode>
    </div>
  )
}
