import React from "react"
import { render } from "@testing-library/react"

import StepForm from "../StepForm"

it("renders properly", () => {
  const { queryByTestId } = render(<StepForm />)
  const stepForm = queryByTestId("step-form")

  expect(stepForm).toBeTruthy()
})
