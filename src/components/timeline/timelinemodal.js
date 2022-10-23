import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  Typography,
} from '@material-ui/core'
import * as modalStyles from './timelinemodal.module.css'
import theme from '../../theme'
import Tag from '../tag'

export default function TimelineModal(props) {
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
