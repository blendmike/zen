var pricingMessages = {
  1: [{
    text: "How would like to upload pay stub from last employer?",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    next: 2
  },{
    step : "Paystubs",
    show : "true"

  }],
  2: [{
      text: "Any other pay stubs?  Upload all of your paystubs for the last 2 years…",
      type: "message"
  }, {
    text: "two two",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    step : "Paystubs",
    next: 3
  }],
  3: [{
      text: "two one",
    type: "message"
  }, {
    text: "two two",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    step : "Credit Report",
    next: 4
  }],
  4: [{
      text: "two one",
    type: "message"
  }, {
    text: "two two",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    step : "Credit Report",
    show : "true",
    next: 5
  }],
  5: [{
    text: "three one.",
    type: "message"
  }, {
    text: "three two.",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    step : "W2s",
    show : "true",
    next: 6
  }],

  6: [{
    text: "four one.",
    type: "message"
  }, {
    text: "four two.",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Tax Returns",
    next: 7
  }],

  7: [{
    text: "Proin pharetra in felis ut tincidunt. Morbi maximus ante eget arcu consectetur.",
    type: "message"
  }, {
    text: "Proin pharetra in felis ut tincidunt. Morbi maximus ante eget arcu consectetur.",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Financial Statements",
    next: 8
  }],
  8: [{
    text: "Proin pharetra in felis ut tincidunt. Morbi maximus ante eget arcu consectetur.",
    type: "message"
  }, {
    text: "Proin pharetra in felis ut tincidunt. Morbi maximus ante eget arcu consectetur.",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Declarations & HMDA",
    next: 9
  }],
    9: [{
    text: "Proin pharetra in felis ut tincidunt. Morbi maximus ante eget arcu consectetur.",
    type: "message"
  }, {
    text: "Proin pharetra in felis ut tincidunt. Morbi maximus ante eget arcu consectetur.",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Additional Questions",
    next: 0
  }]
}