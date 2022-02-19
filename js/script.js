/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "Design is intelligence made visible.",
    source: "Alina Wheeler"
  },
  {
    quote: "So many books, so little time.",
    source: "Frank Zappa"
  },
  {
    quote: "You jump, I jump, Jack.",
    source: "Rory Gilmore",
    citation: "Gilmore Girls"
  },
  {
    quote:"I'm not superstitious, but I am a little stitious.",
    source:"Michael Scott"
  },
  {
    quote:"It does not do to dwell on dreams and forget to live.",
    source:"Albus Dumbledore",
    citation: "Harry Potter and the Sorcerer's Stone",
    year: 1997
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
    let randomNum = Math.floor( Math.random() * arr.length );
    let randomQuote = arr[randomNum];
  return randomQuote;
}

/***
 * `printQuote` function
***/

function printQuote() {
  let generatedQuote = getRandomQuote(quotes);
  var html = `
              <p class="quote"> ${generatedQuote.quote} </p>
              <p class="source"> ${generatedQuote.source}`;
              if (generatedQuote.citation) {
                html += `<span class="citation">${generatedQuote.citation}</span>`;
              }
              if (generatedQuote.year) {
                html += `<span class="year">${generatedQuote.year}</span>`;
              }
              html += `</p>`;
  return html;
}
document.getElementById('quote-box').innerHTML = printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);