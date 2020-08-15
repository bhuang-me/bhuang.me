import React from "react"
import { Modal, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import modalStyles from "./timelinemodal.module.css"

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function TimelineModal(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <Typography>{props.title}</Typography>
        </div>
      </Modal>
    </div>
  )
}
