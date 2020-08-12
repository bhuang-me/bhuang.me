import React from "react"
import TimelineCard from "./timelinecard.js"
import TimelineNode from "./timelinenode.js"
import timelineStyles from "./timeline.module.css"

export default function Timeline() {
  return (
    <div className={timelineStyles.edge}>
      <TimelineNode label="SUMMER 2017" style={{ left: "0px" }}>
        <TimelineCard
          title="IT Intern - Michael Kors"
          projectType="INTERNSHIP"
          desc="Assisted stores and corporate offices in Canada with technical problems, device staging, delivery and repair."
          img={require("./images/mklogo.png")}
        />
      </TimelineNode>
      <TimelineNode label="WINTER 2018" style={{ left: "400px" }}>
        <TimelineCard
          title="Marketing Intern - Broadsign"
          projectType="INTERNSHIP"
          desc="As part of the marketing team, developed webpages and features for the company website following design guidelines."
          img={require("./images/broadsignlogo.png")}
          orientation="up"
          tags={["HTML", "SASS", "Bootstrap", "JQuery", "PHP", "Wordpress"]}
        />
      </TimelineNode>
      <TimelineNode label="WINTER 2019" style={{ left: "1000px" }}>
        <TimelineCard
          title="Software Intern - Accedian Networks"
          projectType="INTERNSHIP"
          desc="Consolidated internal services into a central web portal for easier access and provided a redesign for the VCX product."
          img={require("./images/accedianlogo.png")}
          tags={["HTML", "CSS", "C", "JQuery", "PHP", "Linux"]}
        />
      </TimelineNode>
      <TimelineNode label="WINTER 2020" style={{ left: "1600px" }}>
        <div>
          <TimelineCard
            title="Don't Eat Sand"
            projectType="ACADEMIC"
            desc="A multiplayer real-time strategy (RTS) game developed in team for Advanced Game Development at Concordia University."
            img={require("./images/des.jpg")}
            orientation="up"
            tags={["C#", "Unity"]}
          />
          <TimelineCard
            title="Graduation"
            projectType="ACADEMIC"
            desc="Graduated Concordia University with a Bachelor's Degree in Computer Science (BCompSc) with a specialization in Computer Games."
          />
        </div>
      </TimelineNode>
      <TimelineNode label="SUMMER 2020" style={{ left: "1800px" }}>
        <div>
          <TimelineCard
            title="Portfolio Website"
            projectType="PERSONAL"
            desc="Personal portfolio website made in Gatsby and hosted on GitHub Pages."
            img={require("./images/logo_gradient_card.png")}
            tags={["HTML", "CSS", "ReactJS", "Gatsby"]}
            orientation="up"
          />
          <TimelineCard
            title="Chat Filter Discord Bot"
            projectType="PERSONAL"
            desc="Discord bot that filters words from the chat channel based off a database"
            img={require("./images/discord.jpg")}
            tags={["NodeJS", "MongoDB"]}
          />
        </div>
      </TimelineNode>
      <TimelineNode label="NOW" style={{ left: "2000px" }}>
        <TimelineCard title="To be continued..." />
      </TimelineNode>
    </div>
  )
}
