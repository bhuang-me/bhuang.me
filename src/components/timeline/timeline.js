import React /*, { useContext } */ from 'react'
// import { GlobalContext } from '../../pages/index.js'
// import TimelineCard from './timelinecard.js'
import TimelineEdge from './timelineEdge.js'
// import TimelineModal from './timelinemodal.js'

export default function Timeline() {
    // const { isMobile } = useContext(GlobalContext)

    // const NodeInfo = ({ ...props }) => {
    //     if (isMobile) {
    //         return <TimelineModal {...props} />
    //     }
    //     return <TimelineCard {...props} />
    // }

    return (
        <>
            <TimelineEdge />
            <TimelineEdge />
            <TimelineEdge />
            {/* <TimelineNode
        label="SUMMER 2017"
        style={isMobile ? { top: "0px" } : { left: "0px" }}
      >
        <NodeInfo
          title="IT Intern"
          projectType="INTERNSHIP - MICHAEL KORS"
          desc="Assisted stores and corporate offices in Canada with technical problems, device staging, delivery and repair."
          img={require("./images/mklogo.png")}
        />
      </TimelineNode>
      <TimelineNode
        label="FALL 2018"
        style={isMobile ? { top: "300px" } : { left: "600px" }}
      >
        <NodeInfo
          title="Viral Curse"
          projectType="ACADEMIC"
          desc="A 2D platformer game featuring a unique possession mechanic in a dark fantasy setting. Team project for Intro to Game Development at Concordia University."
          img={require("./images/viralcurse.png")}
          orientation="up"
          tags={["C#", "Unity"]}
        />
      </TimelineNode>
      <TimelineNode
        label="WINTER 2018"
        style={isMobile ? { top: "200px" } : { left: "400px" }}
      >
        <NodeInfo
          title="Marketing Intern"
          projectType="INTERNSHIP - BROADSIGN"
          desc="As part of the marketing team, developed webpages and features for the company website following design guidelines."
          img={require("./images/broadsignlogo.png")}
          orientation="up"
          tags={["HTML", "SASS", "Bootstrap", "JQuery", "PHP", "Wordpress"]}
        />
      </TimelineNode>
      <TimelineNode
        label="WINTER 2019"
        style={isMobile ? { top: "500px" } : { left: "1000px" }}
      >
        <NodeInfo
          title="Software Intern"
          projectType="INTERNSHIP - ACCEDIAN NETWORKS"
          desc="Consolidated internal services into a central web portal for easier access and provided a redesign for the VCX product."
          img={require("./images/accedianlogo.png")}
          tags={["HTML", "CSS", "C", "JQuery", "PHP", "Linux"]}
        />
      </TimelineNode>
      <TimelineNode
        label="WINTER 2020"
        style={isMobile ? { top: "800px" } : { left: "1600px" }}
      >
        <NodeInfo
          title="Graduation"
          projectType="ACADEMIC"
          desc="Graduated Concordia University with a Bachelor's Degree in Computer Science (BCompSc) with a specialization in Computer Games."
        />
        <NodeInfo
          title="Don't Eat Sand"
          projectType="ACADEMIC"
          desc="A multiplayer real-time strategy (RTS) game developed in team for Advanced Game Development at Concordia University."
          img={require("./images/des.jpg")}
          orientation="up"
          tags={["C#", "Unity"]}
        />
      </TimelineNode>
      <TimelineNode
        label="SUMMER 2020"
        style={isMobile ? { top: "900px" } : { left: "1800px" }}
      >
        <NodeInfo
          title="Chat Filter Discord Bot"
          projectType="PERSONAL"
          desc="Discord bot that filters words from the chat channel based off a database."
          img={require("./images/discord.jpg")}
          tags={["NodeJS", "MongoDB"]}
        />
        <NodeInfo
          title="Portfolio Website"
          projectType="PERSONAL"
          desc="Personal portfolio website made in Gatsby and hosted on GitHub Pages."
          img={require("./images/logo_gradient_card.png")}
          tags={["HTML", "CSS", "ReactJS", "Gatsby"]}
          orientation="up"
        />
      </TimelineNode>
      <TimelineNode
        label="NOW"
        style={isMobile ? { top: "1000px" } : { left: "2000px" }}
      >
        <NodeInfo title="To be continued..." />
      </TimelineNode> */}
        </>
    )
}
