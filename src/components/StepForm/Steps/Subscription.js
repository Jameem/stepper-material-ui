import React from "react"
import {
  Typography,
  Select,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl,
  InputLabel,
} from "@material-ui/core"

import "./Steps.css"

function Subscription({
  duration,
  setDuration,
  storage,
  setStorage,
  upfrontPayment,
  setUpfrontPayment,
  subscriptionPlans,
  setPricePerGB,
  setTotalPrice,
  pricePerGB,
}) {
  const handleDurationChange = (event) => {
    const value = event.target.value
    setDuration(value)

    if (subscriptionPlans && subscriptionPlans.length) {
      const plan = subscriptionPlans.find((item) => {
        if (item.duration_months == value) return item.price_usd_per_gb
      })

      const pricePerGB = +plan.price_usd_per_gb
      setPricePerGB(pricePerGB)

      setTotalPrice(+storage * pricePerGB)
    }
  }

  const handleStorageChange = (event) => {
    const value = event.target.value
    setStorage(value)

    setTotalPrice(+value * pricePerGB)
  }

  const handleUpfrontPaymentChange = (event) => {
    setUpfrontPayment(event.target.value)
  }

  return (
    <div className="m-5 form">
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Subscription Information</Typography>
      </div>

      <div className="m-5 step__form">
        <form>
          <FormControl variant="outlined" style={{ width: "100%" }}>
            <InputLabel>Duration</InputLabel>
            <Select
              native
              value={duration}
              onChange={handleDurationChange}
              label="Duration"
              inputProps={{
                name: "duration",
              }}
              data-testid="duration"
            >
              <option value={3}>3 Months</option>
              <option value={6}>6 Months</option>
              <option value={12}>12 Months</option>
            </Select>
          </FormControl>

          <FormControl
            variant="outlined"
            style={{ width: "100%" }}
            className="mt-30"
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              Storage Space in GB
            </InputLabel>
            <Select
              data-testid="storage"
              native
              value={storage}
              onChange={handleStorageChange}
              label="Storage Space in GB"
              inputProps={{
                name: "storage",
              }}
            >
              <option value={5}>5 Gigabytes</option>
              <option value={10}>10 Gigabytes</option>
              <option value={50}>50 Gigabytes</option>
            </Select>
          </FormControl>

          <FormControl
            component="fieldset"
            style={{ width: "100%" }}
            className="mt-30"
            data-testid="payupFront"
          >
            <FormLabel component="legend">Pay Upfront?</FormLabel>
            <RadioGroup
              name="payupFront"
              value={upfrontPayment}
              row
              onChange={handleUpfrontPaymentChange}
            >
              <FormControlLabel
                value="yes"
                control={<Radio color="primary" />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        </form>
      </div>
    </div>
  )
}

export default Subscription
