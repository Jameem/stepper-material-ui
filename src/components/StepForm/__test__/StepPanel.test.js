import React from "react"
import { render } from "@testing-library/react"

import StepPanel from "../StepPanel"

it("renders properly", () => {
  const { queryByTestId } = render(<StepPanel steps={[]} />)
  const stepper = queryByTestId("stepper")

  expect(stepper).toBeTruthy()
})
