import React from "react"
import { render } from "@testing-library/react"

import Footer from "../Footer"

it("renders properly", () => {
  const { queryByTestId } = render(<Footer steps={[]} />)
  const totalPrice = queryByTestId("totalPrice")
  const duration = queryByTestId("duration")
  const storage = queryByTestId("storage")
  const pricePerGB = queryByTestId("pricePerGB")
  const backButton = queryByTestId("back-button")
  const nextButton = queryByTestId("next-button")

  expect(totalPrice).toBeTruthy()
  expect(duration).toBeTruthy()
  expect(storage).toBeTruthy()
  expect(pricePerGB).toBeTruthy()
  expect(backButton).toBeTruthy()
  expect(nextButton).toBeTruthy()
})
