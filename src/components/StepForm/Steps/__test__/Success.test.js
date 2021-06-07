import React from "react"
import { render } from "@testing-library/react"

import Success from "../Success"

it("renders properly", () => {
  const { queryByTestId } = render(<Success />)
  const image = queryByTestId("image")
  const message = queryByTestId("message")
  const caption = queryByTestId("caption")

  expect(image).toBeTruthy()
  expect(message).toBeTruthy()
  expect(caption).toBeTruthy()
})
