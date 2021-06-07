import React from "react"
import { Typography } from "@material-ui/core"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import CloudDoneOutlinedIcon from "@material-ui/icons/CloudDoneOutlined"

import "./Steps.css"

function Success() {
  return (
    <div className="m-5 step__success" style={{ textAlign: "center" }}>
      <CloudDoneOutlinedIcon color="primary" data-testid="image" />
      <Typography variant="h5" data-testid="message">
        Thank you for Subscribing.
      </Typography>

      <Typography variant="body2" data-testid="caption">
        Please check your email for further instructions.
      </Typography>
    </div>
  )
}

export default Success
