import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined"

import "./Nav.css"

function Nav() {
  return (
    <AppBar position="relative" className="nav" data-testid="nav">
      <Toolbar className="nav__toolbar">
        <Typography variant="h5">MoBerries</Typography>
        <MenuOutlinedIcon data-testid="nav-icon" />
      </Toolbar>
    </AppBar>
  )
}

export default Nav
