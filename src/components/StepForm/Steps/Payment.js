import React, { useEffect } from "react"
import { usePaymentInputs, PaymentInputsWrapper } from "react-payment-inputs"
import { Typography } from "@material-ui/core"
import images from "react-payment-inputs/images"

import "./Steps.css"

function Payment({
  setCardNumber,
  setCardExpiry,
  setCardCVV,
  cardNumber,
  cardExpiry,
  cardCVV,
}) {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    meta,
  } = usePaymentInputs()

  useEffect(() => {}, [])

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value)
  }

  const handleExpiryChange = (event) => {
    setCardExpiry(event.target.value)
  }

  const handleCVCChange = (event) => {
    setCardCVV(event.target.value)
  }

  const handleCardNumberError = (error) => {
    if (error) setCardNumber(null)
  }

  const handleExpiryDateError = (error) => {
    if (error) setCardExpiry(null)
  }

  const handleCVCError = (error) => {
    if (error) setCardCVV(null)
  }

  return (
    <div className="m-5 form" data-testid="payment">
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Payment Information
      </Typography>

      <div className="m-5 step__payment">
        <Typography variant="caption">
          Please enter your credit card number, expiry date and security code.
        </Typography>
        <PaymentInputsWrapper
          {...wrapperProps}
          className="m-10"
          data-testid="credit-card"
        >
          <svg {...getCardImageProps({ images })} />
          <input
            {...getCardNumberProps({
              onChange: handleCardNumberChange,
              onError: handleCardNumberError,
            })}
            value={cardNumber}
            data-testid="card"
          />
          <input
            {...getExpiryDateProps({
              onChange: handleExpiryChange,
              onError: handleExpiryDateError,
            })}
            value={cardExpiry}
            data-testid="expiry"
          />
          <input
            {...getCVCProps({
              onChange: handleCVCChange,
              onError: handleCVCError,
            })}
            value={cardCVV}
            data-testid="cvv"
          />
        </PaymentInputsWrapper>
      </div>
    </div>
  )
}

export default Payment
