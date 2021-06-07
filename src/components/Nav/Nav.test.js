import React from "react"
import { render } from "@testing-library/react"

import Nav from "./Nav"

it("renders properly", () => {
  const { queryByTestId } = render(<Nav />)
  const nav = queryByTestId("nav")
  const navIcon = queryByTestId("nav-icon")

  expect(nav).toBeTruthy()
  expect(navIcon).toBeTruthy()
})
