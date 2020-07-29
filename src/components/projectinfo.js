import React from "react"
import Wrapper from "./wrapper"
import projectInfoStyles from "./projectinfo.module.css"

export default function ProjectInfo() {
  return (
    <div className={projectInfoStyles.container}>
      <div className={projectInfoStyles.projectHeader}>PROJECTS</div>
      <div className={projectInfoStyles.projectInfoContainer}>
        <div className={projectInfoStyles.projectInfo}>
          <div style={{ clear: "both" }}>
            <div className={projectInfoStyles.subHeader}>WHAT I'VE DONE</div>
          </div>
          <Wrapper>
            <div className={projectInfoStyles.projectSubcat}>
              <div
                className={projectInfoStyles.rts + " beforeAnimate_projects"}
              >
                <div className={projectInfoStyles.rtsImgContainer}>
                  <img src={require("./images/des.jpg")} alt="Dont Eat Sand" />
                </div>
                <div className={projectInfoStyles.subcatHeader}>
                  <div>Don't Eat Sand</div>
                  <div>Multiplayer Real-Time Strategy</div>
                </div>
                <div style={{ fontWeight: "bold" }}>
                  Team project for Advanced
                </div>
                <div style={{ fontWeight: "bold" }}>Game Development W2020</div>
                <div>Unity Engine</div>
                <div>Photon Unity Networking</div>
              </div>
              <div
                className={
                  projectInfoStyles.discord + " beforeAnimate_projects"
                }
              >
                <div className={projectInfoStyles.discImgContainer}>
                  <img
                    src={require("./images/discord.jpg")}
                    alt="Discord Logo"
                  />
                </div>
                <div className={projectInfoStyles.subcatHeader}>
                  Discord Filter Bot
                </div>
                <div style={{ fontWeight: "bold" }}>
                  Discord bot that filters messages based on database-stored
                  words
                </div>
                <div>NodeJS // MongoDB</div>
              </div>
              <div
                className={projectInfoStyles.book + " beforeAnimate_projects"}
              >
                <div className={projectInfoStyles.subcatHeader}>
                  <div>Book Inventory</div>
                  <div>Management Web App</div>
                </div>
                <div style={{ fontWeight: "bold" }}>
                  Book management system with login implemented with OOP design
                  patterns and CRUD operations
                </div>
                <div>HTML // CSS // Java // MySQL</div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  )
}
