import React from "react"
import { Typography, Button, Chip } from "@material-ui/core"
import DoneIcon from "@material-ui/icons/Done"

function Footer({
  activeStep,
  steps,
  handleBack,
  handleNext,
  duration,
  storage,
  pricePerGB,
  totalPrice,
  validatePaymentInfo,
  validateConfirmation,
  submitSubscribtion,
  loading,
}) {
  return (
    activeStep !== steps.length && (
      <div className="stepForm__footer">
        <div>
          <Typography className="ml-10" variant="h6" data-testid="totalPrice">
            <small>Total Price: </small>$ {totalPrice}
          </Typography>

          <Chip
            size="small"
            icon={<DoneIcon />}
            label={`${duration} Months`}
            clickable
            color="primary"
            className="m-5"
            data-testid="duration"
          />
          <Chip
            size="small"
            icon={<DoneIcon />}
            label={`${storage} Gigabytes`}
            clickable
            color="primary"
            className="m-5"
            data-testid="storage"
          />

          <Chip
            size="small"
            icon={<DoneIcon />}
            label={`$ ${pricePerGB}/GB`}
            clickable
            color="primary"
            className="m-5"
            data-testid="pricePerGB"
          />
        </div>

        <div className="m-5">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            data-testid="back-button"
          >
            Back
          </Button>

          {activeStep !== steps.length - 1 && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={
                activeStep === 1 && !validatePaymentInfo() ? true : false
              }
              data-testid="next-button"
            >
              next
            </Button>
          )}

          {activeStep === steps.length - 1 && (
            <Button
              variant="contained"
              color="primary"
              onClick={submitSubscribtion}
              disabled={!validateConfirmation() ? true : false}
              data-testid="confirm-button"
            >
              {loading ? "Submitting..." : "Confirm & Finish"}
            </Button>
          )}
        </div>
      </div>
    )
  )
}

export default Footer
