import React, { useState } from "react"
import {
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  Divider,
  TextField,
} from "@material-ui/core"

import "./Steps.css"

function Confirmation({
  duration,
  storage,
  pricePerGB,
  totalPrice,
  setEmail,
  setTermsAgreement,
  email,
  termsAgreement,
}) {
  const [validEmail, setValidEmail] = useState(true)
  const handleEmailChange = (event) => {
    const email = event.target.value

    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(email)) {
      setValidEmail(true)
      setEmail(email)
    } else {
      setValidEmail(false)
      setEmail(null)
    }
  }

  const handleTermsAgreementChange = (event) => {
    setTermsAgreement(event.target.checked)
  }

  return (
    <div className="m-5 form" data-testid="confirmation">
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">Confirm Subscription</Typography>
      </div>
      <div className="m-5 step__form">
        <Card style={{ maxWidth: "475px" }}>
          <CardContent>
            <Typography color="textSecondary" variant="body2">
              Duration
            </Typography>
            <Typography variant="subtitle2">{duration} Months</Typography>

            <Typography color="textSecondary" variant="body2" className="mt-10">
              Storage Space
            </Typography>
            <Typography variant="subtitle2">{storage} Gigabytes</Typography>

            <Typography color="textSecondary" variant="body2" className="mt-10">
              Price per GB
            </Typography>
            <Typography variant="subtitle2"> $ {pricePerGB}</Typography>

            <Divider className="mt-10"></Divider>

            <Typography color="textSecondary" variant="body2" className="mt-10">
              Total Amount
            </Typography>
            <Typography variant="h5">${totalPrice} </Typography>

            <Divider className="mt-10 mb-10"></Divider>

            <Typography variant="caption" className="mt-10">
              Please enter your email
            </Typography>

            <br></br>

            <TextField
              className="mt-10"
              label="Email "
              variant="outlined"
              type="email"
              error={!validEmail ? true : false}
              helperText={!validEmail ? "Please enter a valid email." : ""}
              style={{ width: "100%" }}
              onChange={handleEmailChange}
              value={email}
              data-testid="email"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={termsAgreement}
                  name="checkedA"
                  color="primary"
                  onChange={handleTermsAgreementChange}
                />
              }
              label={
                <Typography variant="caption">
                  Click here to indicate that you have read and agree to the
                  terms presented in the Terms and Conditions agreement
                </Typography>
              }
              className="mt-10"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Confirmation
