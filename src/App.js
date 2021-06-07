import React from "react"
import { Container } from "@material-ui/core"

import "./App.css"
import Nav from "./components/Nav/Nav"
import StepForm from "./components/StepForm/StepForm"

function App() {
  return (
    <Container>
      <Nav />
      <StepForm />
    </Container>
  )
}

export default App
