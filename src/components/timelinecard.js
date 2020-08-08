import React, { useEffect } from "react"
import {
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@material-ui/core"
import timelineCardStyles from "./timelinecard.module.css"
import theme from "../theme.js"

const triangleDown = {
  width: "0px",
  height: "0px",
  position: "absolute",
  borderLeft: "15px solid transparent",
  borderRight: "15px solid transparent",
  borderBottom: "15px solid white",
  transform: "translate(-50%, -100%)",
  marginTop: "5rem",
}

const triangleUp = {
  width: "0px",
  height: "0px",
  position: "absolute",
  bottom: "0px",
  borderLeft: "15px solid transparent",
  borderRight: "15px solid transparent",
  borderTop: "15px solid white",
  transform: "translate(-50%)",
  marginBottom: "calc(5rem - 15px)",
}

export default function TimelineCard(props) {
  var up = props.orientation == "up"
  return (
    <div
      className={timelineCardStyles.cardContainer}
      style={{
        ...props.style,
        ...(up ? { bottom: "0px" } : ""),
      }}
    >
      <ThemeProvider theme={theme}>
        <div style={up ? triangleUp : triangleDown}></div>
        <Card
          className={
            up ? timelineCardStyles.cardUp : timelineCardStyles.cardDown
          }
        >
          <CardContent>
            <Typography variant="subtitle1">{props.date}</Typography>
            <Typography variant="h4">{props.title}</Typography>
          </CardContent>
          <CardMedia
            image={props.img}
            title="discord img"
            className={timelineCardStyles.media}
          />
          <CardContent>
            <Typography variant="h6" color="textSecondary">
              {props.projectType}
            </Typography>
            <Typography variant="body1">{props.desc}</Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  )
}
