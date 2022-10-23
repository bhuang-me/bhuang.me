import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
} from '@material-ui/core'
// import { makeStyles } from "@material-ui/core/styles"
import * as timelineCardStyles from './timelinecard.module.css'
import theme from '../../theme'
import Tag from '../tag'

export default function TimelineCard(props) {
  var up = props.orientation === 'up'
  return (
    <div
      className={timelineCardStyles.cardContainer}
      style={{
        ...props.style,
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
