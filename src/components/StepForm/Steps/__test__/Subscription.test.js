import React from "react"
import { render } from "@testing-library/react"

import Subscription from "../Subscription"

it("renders properly", () => {
  const { queryByTestId } = render(<Subscription />)
  const duration = queryByTestId("duration")
  const storage = queryByTestId("storage")
  const payupFront = queryByTestId("payupFront")

  expect(duration).toBeTruthy()
  expect(storage).toBeTruthy()
  expect(payupFront).toBeTruthy()
})
