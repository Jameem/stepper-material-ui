import React from "react"
import { render } from "@testing-library/react"

import Confirmation from "../Confirmation"

it("renders properly", () => {
  const { queryByTestId } = render(<Confirmation />)
  const confirmation = queryByTestId("confirmation")
  const email = queryByTestId("email")

  expect(confirmation).toBeTruthy()
  expect(email).toBeTruthy()
})
