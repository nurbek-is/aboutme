var userInput= prompt("Welcome to my App, What is Your Name?");
var welcome= alert ('Hello ' + userInput + ',  let\'s play guessing game, if you guess correctly you will get a medal');


var questions = [
 ['Have I been to Turkey?', 'yes'],
 ['Which Sport is my Favorite Sport Tennis or Rugby?', 'tennis'],
 ['Is Aquire my favorite board game?', 'yes']

];

var correctGuess=0;
var question;
var answer;
var response;
var results;

function print (message) {
  var outcomeId= document.getElementById('outcome');
  outcomeId.innerHTML=message;
}

for (var i = 0; i < questions.length; i++) {
  question= questions[i][0];
  answer=questions [i][1];

  response=(prompt(question)).toLowerCase();
  if (response===answer) {
    correctGuess+= 1;
  }
}
results= 'You got ' + correctGuess +  ' question(s) right.';
print (results);



var rightAnswer=['montana','california', 'florida', 'oregon'];
var answerWasFound=false;
var question6= prompt ('What states have I lived in besides Washington?');
for (var i = 0; i < rightAnswer.length; i++) {
  if (question6.toLowerCase() === rightAnswer[i]) {
    alert('You guessed it right');
    answerWasFound=true;
    correctGuess+= 1;
    break;
  }
  else {
    alert('You guessed it wrong');
    break;
  }
}


// var question1 = prompt('Do you think I was born Washington');
//
// if (question1.toLowerCase ()==="no" || question1.toLowerCase ()==="n") {
//   alert ('You got it right');
//   correctGuess+=1;
// } else {
//   alert ('You got it wrong, good luck with the next question');
// };
// var question2 = prompt ('Which Sport is my Favorite Sport Tennis or Rugby?');
// if (question2.toLowerCase ()==='tennis') {
//   alert ('You got it right');
//   correctGuess+=1;
// } else {
//   alert ('You got it Wrong, good luck with the next question');
// };
// // var question3 = prompt ('Guess how many countries have I visited, # between 1 & 8?')
// //   if (question3.toLowerCase ()==='five' || (question3)==='5') {
// //     alert ('You got it right');
// //     correctGuess+=1;
// //   } else {
// //     alert ('You got it wrong, good luck with the next question');
// //   };
// var question4 = prompt ('Is Aquire my favorite board game?');
// if (question4.toLowerCase ()==="yes" || question4.toLowerCase ()==="y") {
//   alert ('You got it right');
//   correctGuess+=1;
// } else {
//   alert ('You got it wrong, good luck with the next question');
// };
//
var question5 = prompt ('Guess what is my favorite number between 1 & 9');
var guess= 3
var guessLeft = '[' + guess + ' Guess(es) Left]';

while (guess > 0) {
  if ( parseInt(question5)=== 6) {
    alert ('You got it Right');
    correctGuess+=1;
    guess=0;
  }  else if (question5 > 6) {
    question5= prompt ('Your guess is too High, Guess again ' + guessLeft)
    guess-=1;
    var guessLeft = '[' + guess + ' Guess(es) Left]';
  } else if (question5 < 6) {
    question5 = prompt ('Your guess is too Low, Guess again ' + guessLeft)
    guess-=1;
    var guessLeft = '[' + guess + ' Guess(es) Left]';
  } else {
    alert ('You got it wrong, lets move on to next quiz?');
  }
}


 alert ('You got ' + correctGuess + ' out of 6 questions correct')


//   if (correctGuess >= 4) {
// document.write("<p><strong>You Earned a Gold Medal</strong></p>");
// }
// else if (correctGuess >= 3) {
// document.write("<p><strong>You Earned a Silver Medal</strong></p>");
// }
// else if (correctGuess >= 2) {
// document.write("<p><strong>You Earned a Bronze Medal</strong></p>");
// }
// else {
// document.write ('<p><strong>You Earned No Medal</strong></p>');
// }
