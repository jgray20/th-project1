/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array of 5 quotes 
***/
let quotes = [
  {
    quote: "Design is intelligence made visible.",
    source: "Alina Wheeler",
    category: "Inspiration"
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
    source:"Michael Scott",
    category: "Humor"
  },
  {
    quote:"It does not do to dwell on dreams and forget to live.",
    source:"Albus Dumbledore",
    citation: "Harry Potter and the Sorcerer's Stone",
    year: 1997
  }
];


/***
 * Function to generate a random quote
***/

function getRandomQuote(arr) {
    let randomNum = Math.floor( Math.random() * arr.length );
    let randomQuote = arr[randomNum];
  return randomQuote;
}




/***
 * Function to display a random quote and background color
***/

function printQuote() {
  let generatedQuote = getRandomQuote(quotes);
  let html = `
                <p class="quote"> ${generatedQuote.quote} </p>
                <p class="source"> ${generatedQuote.source}
              `;
              if (generatedQuote.citation) {
                html += `<span class="citation">${generatedQuote.citation}</span>`;
              }
              if (generatedQuote.year) {
                html += `<span class="year">${generatedQuote.year}</span>`;
              }
              if (generatedQuote.category) {
                html += `<span class="tags">, ${generatedQuote.category}</span>`;
              }
              html += `</p>`;
  let color1 = Math.floor( Math.random() * 255 );
  let color2 = Math.floor( Math.random() * 255 );
  let color3 = Math.floor( Math.random() * 255 );
  document.body.style.backgroundColor = `rgb( ${color1}, ${color2}, ${color3} )`; 
  return document.getElementById('quote-box').innerHTML = html; 
}
printQuote();

/*
  Interval to change the quote every 10 seconds
*/
let quoteInterval = setInterval( printQuote, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);