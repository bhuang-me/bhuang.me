import React from "react"
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
  var orientation
  var cardOrientation
  if (props.orientation == "up") {
    orientation = triangleUp
    cardOrientation = timelineCardStyles.cardUp
  } else {
    orientation = triangleDown
    cardOrientation = timelineCardStyles.cardDown
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={orientation}></div>
      <Card className={cardOrientation}>
        <CardContent>
          <Typography variant="subtitle1">Date</Typography>
          <Typography variant="h4">Title</Typography>
        </CardContent>
        <CardMedia
          image={require("./images/discord.jpg")}
          title="discord img"
          className={timelineCardStyles.media}
        />
        <CardContent>
          <Typography variant="h6" color="textSecondary">
            personal project
          </Typography>
          <Typography variant="body1">Description</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
