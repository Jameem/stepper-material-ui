import React, { useState, useEffect } from "react"
import axios from "axios"
// import { Stepper, Step, StepLabel } from "@material-ui/core"

import "./StepForm.css"
import StepPanel from "./StepPanel"
import Footer from "./Footer"
import Subscription from "./Steps/Subscription"
import Payment from "./Steps/Payment"
import Confirmation from "./Steps/Confirmation"
import Success from "./Steps/Success"

function getSteps() {
  return ["Select Subscription", "Payment Information", "Confirm Subscription"]
}

function StepForm() {
  const steps = getSteps()
  const [activeStep, setActiveStep] = useState(0)
  const [duration, setDuration] = useState(3)
  const [storage, setStorage] = useState(5)
  const [upfrontPayment, setUpfrontPayment] = useState("no")
  const [pricePerGB, setPricePerGB] = useState(null)
  const [totalPrice, setTotalPrice] = useState(null)
  const [subscriptionPlans, setSubscriptionPlans] = useState([])
  const [cardNumber, setCardNumber] = useState(null)
  const [cardExpiry, setCardExpiry] = useState(null)
  const [cardCVV, setCardCVV] = useState(null)
  const [email, setEmail] = useState(null)
  const [termsAgreement, setTermsAgreement] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Fetching the subscription plans on initial render
    async function getSubscriptionPlans() {
      const result = await axios.get(
        "https://cloud-storage-prices-moberries.herokuapp.com/prices"
      )
      if (result && result.data) {
        const plans = result.data.subscription_plans
        setSubscriptionPlans(plans)

        if (plans && plans.length) {
          const plan = plans.find((item) => {
            if (item.duration_months == 3) return item.price_usd_per_gb
          })

          // Get the price for 3 months subscription
          const pricePerGB = +plan.price_usd_per_gb

          // Set the total price
          setPricePerGB(pricePerGB)
          setTotalPrice(+storage * pricePerGB)
        }
      }
    }

    getSubscriptionPlans()
  }, [])

  const handleNext = () => {
    // Go to the payment information step
    if (activeStep === 0) setActiveStep((prevActiveStep) => prevActiveStep + 1)

    // Validate the payment information before moving to the next step
    if (activeStep === 1 && validatePaymentInfo())
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const validatePaymentInfo = () => {
    if (!cardNumber || !cardExpiry || !cardCVV) return false

    return true
  }

  // Validate email and terms and conditions
  const validateConfirmation = () => {
    if (!email || !termsAgreement) return false

    return true
  }

  // Handle back button click
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  // Haandle form submit
  const submitSubscribtion = async () => {
    if (!validateConfirmation) return false

    setLoading(true)

    const data = {
      duration,
      storage,
      upfrontPayment,
      pricePerGB,
      totalPrice,
      cardNumber,
      cardExpiry,
      cardCVV,
      email,
    }

    const result = await axios.post("https://httpbin.org/post", data)

    if (result && result.data) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
      setLoading(false)
    }
  }

  // Setting up the step components
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Subscription
            duration={duration}
            setDuration={setDuration}
            storage={storage}
            setStorage={setStorage}
            upfrontPayment={upfrontPayment}
            setUpfrontPayment={setUpfrontPayment}
            subscriptionPlans={subscriptionPlans}
            setPricePerGB={setPricePerGB}
            setTotalPrice={setTotalPrice}
            pricePerGB={pricePerGB}
          />
        )
      case 1:
        return (
          <Payment
            setCardNumber={setCardNumber}
            setCardExpiry={setCardExpiry}
            setCardCVV={setCardCVV}
            cardNumber={cardNumber}
            cardExpiry={cardExpiry}
            cardCVV={cardCVV}
          />
        )
      case 2:
        return (
          <Confirmation
            duration={duration}
            storage={storage}
            pricePerGB={pricePerGB}
            totalPrice={totalPrice}
            email={email}
            termsAgreement={termsAgreement}
            setEmail={setEmail}
            setTermsAgreement={setTermsAgreement}
          />
        )

      case 3:
        return <Success />
      default:
        return "Unknown step"
    }
  }

  return (
    <div className="stepForm" data-testid="step-form">
      <StepPanel steps={steps} activeStep={activeStep} />

      {getStepContent(activeStep)}

      <Footer
        steps={steps}
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
        duration={duration}
        storage={storage}
        pricePerGB={pricePerGB}
        totalPrice={totalPrice}
        validatePaymentInfo={validatePaymentInfo}
        validateConfirmation={validateConfirmation}
        submitSubscribtion={submitSubscribtion}
        loading={loading}
      />
    </div>
  )
}

export default StepForm
