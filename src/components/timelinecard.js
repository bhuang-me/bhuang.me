import React from "react"
import {
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import timelineCardStyles from "./timelinecard.module.css"
import theme from "../theme.js"
import Tag from "../components/tag.js"

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

const gradientStyle = {
  background:
    "background: linear-gradient(180deg, rgba(0, 220, 255, 1) 0%, rgba(0, 255, 201, 1) 100%)",
}

export default function TimelineCard(props) {
  var up = props.orientation === "up"
  return (
    <div
      className={timelineCardStyles.cardContainer}
      style={{
        ...props.style,
        ...(up ? { bottom: "0px" } : ""),
      }}
    >
      <ThemeProvider theme={theme}>
        <Card
          className={
            up ? timelineCardStyles.cardUp : timelineCardStyles.cardDown
          }
        >
          {props.img && (
            <CardMedia
              image={props.img}
              title="discord img"
              className={timelineCardStyles.media}
            />
          )}
          <CardContent>
            {props.title && <Typography variant="h4">{props.title}</Typography>}
            {props.projectType && (
              <Typography variant="subtitle2">{props.projectType}</Typography>
            )}
          </CardContent>
          <CardContent>
            {props.desc && (
              <Typography variant="body1">{props.desc}</Typography>
            )}
            {props.tags && (
              <>
                <br />
                {props.tags.map((tag, key) => (
                  <Tag label={tag} key={key}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  )
}
