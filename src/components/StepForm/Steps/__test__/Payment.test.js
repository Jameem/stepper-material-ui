import React from "react"
import { render } from "@testing-library/react"

import Payment from "../Payment"

it("renders properly", () => {
  const { queryByTestId } = render(<Payment />)
  const payment = queryByTestId("payment")
  const creditCard = queryByTestId("credit-card")
  const card = queryByTestId("card")
  const expiry = queryByTestId("expiry")
  const cvv = queryByTestId("cvv")

  expect(payment).toBeTruthy()
  expect(creditCard).toBeTruthy()
  expect(card).toBeTruthy()
  expect(expiry).toBeTruthy()
  expect(cvv).toBeTruthy()
})
