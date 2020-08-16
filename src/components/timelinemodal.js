import React from "react"
import {
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
} from "@material-ui/core"
import modalStyles from "./timelinemodal.module.css"
import theme from "../theme.js"
import Tag from "../components/tag.js"

export default function TimelineModal(props) {
  const [open, setOpen] = React.useState(true)

  return (
    <div className={modalStyles.container}>
      <div className={modalStyles.cardContainer}>
        <ThemeProvider theme={theme}>
          <Card>
            {props.img && (
              <CardMedia
                image={props.img}
                title="discord img"
                className={modalStyles.media}
              />
            )}
            <CardContent>
              {props.title && (
                <Typography variant="h4">{props.title}</Typography>
              )}
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
    </div>
  )
}
