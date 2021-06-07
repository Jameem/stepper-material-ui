import React from "react"
import { Stepper, Step, StepLabel } from "@material-ui/core"

function StepPanel({ activeStep, steps }) {
  return (
    <Stepper
      alternativeLabel
      className="stepForm__stepper"
      activeStep={activeStep}
      data-testid="stepper"
    >
      {steps.map((label, index) => {
        const stepProps = {}
        const labelProps = {}

        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        )
      })}
    </Stepper>
  )
}

export default StepPanel
