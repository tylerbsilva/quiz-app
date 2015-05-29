var quiz =  {};

// VARIABLES
quiz.questions = [
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
    "Question" : "5. In the search for a solution, Mercy Home for Boys & Girls aides homeless youth. What percentage of kids get back on track in school with the help of their program?",
    "Answers" : ["95%", "99%", "92%", "96%"],
    "Correct" : "96%"
  }
];

quiz.score = 0;

// FUNCTIONS

quiz.buildButtons = function(answers) {
  var output = "<ul>";
  for (var i = 0; i < answers.length; i++){
    output += "<li><button onclick='quiz.checkanswer(this)'>" + answers[i] + "</button></li>";
  }
  output += "</ul>";
  return output;
};

// Parse questions and build out page based on contents
quiz.buildQuestions = function(questionsArray) {
  var questionHTML = "";
  for (var i = 0; i < questionsArray.length; i++ ) {
    // Parse answers and build out buttons
    questionHTML += "<div class='question' id='" + i + "'>";
    questionHTML += "<h1>"+ questionsArray[i].Question + "</h1>";
    questionHTML += quiz.buildButtons(questionsArray[i].Answers);
    questionHTML += "</div>";
  }
  return questionHTML;
};


// when button is clicked, check if correct
quiz.checkanswer = function(answer){
  // Get the current question (id of div)
  var div = answer.parentNode.parentNode.parentNode;
  var divID = div.getAttribute('id');
  var button = answer.innerHTML;
  // check if answer is correct
  $(div).find('button').each(function(index, element){
    if (quiz.questions[parseInt(divID)].Correct == element.innerHTML) {
      // change color
      $(element).css("background-color", "rgb(166, 244, 169)");
      $(element).attr('disabled', true);
      $(element).attr('onclick', '');
    } else {
      $(element).css("background-color", "rgb(247, 135, 135)");
      $(element).attr('disabled', true);
      $(element).attr('onclick', '');
    }
  });

  if (quiz.questions[parseInt(divID)].Correct == button) {
    // if correct +1
    quiz.score += 1;
    // Update score at bottom of page
    $(".final span").text(quiz.score);
  } else {

  }
};

// Show right/wrong, which one is the correct answer

// Quiz start
quiz.start = function(){
  $('html, body').animate({
      scrollTop: $("#0").offset().top
  }, 1000);
};


// Show "reset" button that resets everything
quiz.reset = function(){
  // reset button colors
  $('button').css("background-color", "#EEEEEE");
  $('#quiz').find('button').each(function(index, element){
    $(element).attr('onclick', 'quiz.checkanswer(this)');
  });
  // reset score
  quiz.score = 0;
  $(".final span").text(quiz.score);
  // Scroll back to top
  $('html, body').animate({
      scrollTop: $("#intro").offset().top
  }, 1000);
};

quiz.updateQuestionNumber = function(divID){
  $("nav span").text(divID);
};

quiz.enterDiv = function(){
  $('div').mouseenter(function(){
    var thisID = parseInt($(this).attr("id"));
    quiz.updateQuestionNumber(thisID + 1);
  });
};

// PHASE 2:
// Prompt User for name
// Welcome user and ask if they want to start the quiz


$(document).ready(function() {
  $('.quiz').append(quiz.buildQuestions(quiz.questions));
  $('nav').hide();

  // Show questions number when taking quiz, hide when not in #quiz
  $('#quiz')
  .mouseenter(function(){
    $('nav').fadeIn();
  })
  .mouseleave(function(){
    $('nav').fadeOut();
  });

  // Update question numbers at top
  quiz.enterDiv();



});
