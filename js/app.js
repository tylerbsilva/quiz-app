// VARIABLES
var questions = [
  {
    "Question" : "1. Approximately how many homeless youth are in Chicago Public Schools?",
    "Answers" : ["15,000", "12,000", "10,000", "7,000"],
    "Correct" : "15,000"
  },
  {
    "Question" : "2. Approximately how many homeless youth in Chicago Public Schools are unaccompanied?",
    "Answers" : ["2,000", "3,000", "4,000", "1,000"],
    "Correct" : "4,000"
  },
  {
    "Question" : "3. What fraction of the total homeless population of the USA are under 6 years old?",
    "Answers" : ["1/75", "1/50", "1/60", "1/80"],
    "Correct" : "1/50"
  },
  {
    "Question" : "4. Approximately how many youth experience long-term homelessness (6 months or more) each year?",
    "Answers" : ["30,000", "40,000", "50,000", "60,000"],
    "Correct" : "50,000"
  },
  {
    "Question" : "5. In the search for a solution, Mercy Home for Boys & Girls aide homeless youth. What percentage of kids get back on track in school with the help of their program?",
    "Answers" : ["95%", "99%", "92%", "96%"],
    "Correct" : "96%"
  }
];

// Prompt User for name

// Welcome user and ask if they want to start the quiz




// Parse questions and build out page based on contents
function buildQuestions(arr) {
  var questionHTML = "";
  for (var i = 0; i < arr.length; i++ ) {
    // Parse answers and build out buttons
    questionHTML += "<section id='question" + i + "'>";
    questionHTML += buildButtons(arr.Answers);
    questionHTML += "</section>";
  }
  return questionHTML;
}

function buildButtons(arr) {
  var output = "";
  for (var i = 0; i < arr.length ; i++){
    output += "<button>" + arr[i] + "</button>";
  }
  return output;
}


// when button is clicked, check if correct
  //if correct +1
// scroll to next section

// Once completed, show amount correct
// Show "reset" button that resets everything


$(document).ready(function() {

});
