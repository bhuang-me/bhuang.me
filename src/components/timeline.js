import React from "react"
import TimelineCard from "./timelinecard.js"
import TimelineNode from "./timelinenode.js"
import timelineStyles from "./timeline.module.css"

export default function Timeline() {
  return (
    <div className={timelineStyles.edge}>
      <TimelineNode label="SUMMER 2017" style={{ left: "0px" }}>
        <TimelineCard
          title="IT Intern @ Michael Kors"
          date="SUMMER 2017"
          projectType="internship"
          desc="some project I did"
          img={require("./images/mklogo.png")}
        />
      </TimelineNode>
      <TimelineNode label="WINTER 2018" style={{ left: "400px" }}>
        <TimelineCard
          title="Marketing Intern @ Broadsign"
          date="WINTER 2018"
          projectType="internship"
          desc="some project I did"
          img={require("./images/broadsignlogo.png")}
          orientation="up"
        />
      </TimelineNode>
      <TimelineNode label="WINTER 2019" style={{ left: "1000px" }}>
        <TimelineCard
          title="Software Intern @ Accedian Networks"
          date="WINTER 2019"
          projectType="internship"
          desc="some project I did"
          img={require("./images/accedianlogo.png")}
        />
      </TimelineNode>
      <TimelineNode label="WINTER 2020" style={{ left: "1600px" }}>
        <TimelineCard
          title="Don't Eat Sand"
          date="WINTER 2020"
          projectType="academic"
          desc="A multiplayer real-time strategy (RTS) game developed in team for Advanced Game Development at Concordia University"
          img={require("./images/des.jpg")}
          orientation="up"
        />
      </TimelineNode>
      <TimelineNode label="SUMMER 2020" style={{ left: "1800px" }}>
        <TimelineCard
          title="Portfolio Website"
          date="SUMMER 2020"
          projectType="personal"
          desc="Personal portfolio website made in Gatsby and hosted on GitHub Pages"
          img={require("./images/logo_gradient.png")}
        />
      </TimelineNode>
      <TimelineNode label="NOW" style={{ left: "2000px" }}></TimelineNode>
    </div>
  )
}
