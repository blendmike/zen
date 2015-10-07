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
    step : "Getting to Know You",
    pause: "yes",
    show : "true",
    next: 2
  }],
  2: [{
      text: "Ask basic questions here to set up the application:",
      type: "message"
  }, {
    text: "What's your name?",
    type: "message"
  }, {
    text: "When will you purchase a home?",
    type: "message",
    step : "Getting to Know You"    

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
    text: "Continue",
    type: "button",
    pause: "yes",
  
    next: 7
  },{
    step : "Credit Report"
  }],
 
  7: [{
    text: "Alright, we're all done pulling your credit report!",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    next: 8
  },{
    show : "true",
    step : "Credit Report"
  }],
 
  8: [{
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
    next: 9
  }],
 
    9: [{
    text: "Alright, we're all done uploading your W2s!",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "W2s",
    next: 10
  }],
 
    10: [{
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
    next: 11
  }],
 
    11: [{
    text: "Alright, we're all done uploading your paystubs!",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Paystubs",
    next: 12
  }],
 
    12: [{
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
    next: 13
  }],
 
    13: [{
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
    next: 14
  }],
 
    14: [{
    text: "Alright, we're all done uploading your financial statements!",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Financial Statements",
    next: 15
  }],
 
    15: [{
    text: "Almost there - just a few more questions before we can approve you!",
    type: "message"
  }, {
    text: "What is your current monthly rent?",
    type: "message"
  }, {
    text: "What do you pay monthly towards alimony and/or child support?",
    type: "message"
  }, {
    text: "Continue",
    type: "button",
    pause: "yes",
    show : "true",
    step : "Additional Questions",
    next: 16
  }],
 
    16: [{
    text: "Alright, you're all done with your application!",
    type: "message"
  }, {
    text: "Up next, we'll see which loans you qualify for.",
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