var pricingMessages = {
  1: [{
    text: "Let's get you approved for a mortgage!",
    type: "message"
  }, {
    text: "To make that happen, we're going to ask you some questions about yourself and have you upload some documents",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    next: 2,
    step : "Getting to Know You",
    show : "true"
  }],
  2: [{
      text: "Ask basic questions here to set up the application:",
      type: "message"
  }, {
    text: "What's your name?",
    type: "message"
  }, {
    text: "When will you purchase a home?",
    type: "message"
  }, {
    text: "What kind of home are you looking for?",
    type: "message"
  }, {
    text: "etc.",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    step : "Getting to know you",
    next: 3
  }],
  3: [{
      text: "Next up, we'll need copies of the last two years of your Tax Returns",
    type: "message"
  }, {
    text: "How would you like to upload Adam’s 2014 Tax Return?",
    type: "message"
  }, {
    text: "If this tax return was filed using TurboTax, you may be able to import them - which will save you a lot of time.",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    step : "Tax Returns",
    next: 4
  }],
  4: [{
      text: "Importing your taxes...",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    step : "Tax Returns",
    show : "true",
    next: 5
  }],
  5: [{
    text: "Next up, we'll need to pull your credit to gauge your credit worthiness.",
    type: "message"
  }, {
    text: "Do you authorize us to obtain a standard consumer credit report?",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    step : "Tax Returns",
    show : "true",
    next: 6
  }],
  6: [{
    text: "Pulling your credit...",
    type: "message"
  }, {
    text: "Alright, we're all done pulling your credit report!",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Credit Report",
    next: 7
  }],
  7: [{
    text: "Up next, we'll need copies of your W2s for the past two years.",
    type: "message"
  }, {
    text: "Upload your 2014 W2s:",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "W2s",
    next: 8
  }],
    8: [{
    text: "Alright, we're all done uploading your W2s!",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "W2s",
    next: 9
  }],
    9: [{
    text: "Up next, we'll need copies of your paystubs for the past two years",
    type: "message"
  }, {
    text: "Upload your Blend paystubs:",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Paystubs",
    next: 10
  }],
    10: [{
    text: "Alright, we're all done uploading your paystubs!",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Paystubs",
    next: 11
  }],
    11: [{
    text: "Up next, we'll need financial statements for the past 30 days.",
    type: "message"
  }, {
    text: "How would you like to upload your checking account statement?",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Financial Statements",
    next: 12
  }],
    12: [{
    text: "Importing your Bank of America accounts...",
    type: "message"
  }, {
    text: "Do you have any other financial statements?",
    type: "message"
  }, {
    text: "We need all of your banking, brokerage, and retirement accounts.",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Financial Statements",
    next: 0
  }]
}
