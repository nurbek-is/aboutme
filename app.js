var userInput= prompt("Welcome to my App, What is Your Name?");
var welcome= alert ('Hello ' + userInput + ',  let\'s play guessing game, if you guess correctly you will get a medal in the end');
var correctGuess=0;

var question1 = prompt('Do you think I was born Washington');

if (question1.toLowerCase ()==="no" || question1.toLowerCase ()==="n") {
  alert ('You got it right');
  correctGuess+=1;
} else {
  alert ('You got it wrong, good luck with the next question');
};
var question2 = prompt ('Which Sport is my Favorite Sport Tennis or Baseball?');
if (question2.toLowerCase ()==='tennis') {
  alert ('You got it right');
  correctGuess+=1;
} else {
  alert ('You got it Wrong, good luck with the next question');
};
var question3 = prompt ('Guess how many countries have I visited, # between 1 & 8?')
  if (question3.toLowerCase ()==='five' || (question3)==='5') {
    alert ('You got it right');
    correctGuess+=1;
  } else {
    alert ('You got it wrong, good luck with the next question');
  };
var question4 = prompt ('Is Aquire my favorite board game, Yes or No');
if (question4.toLowerCase ()==="yes" || question4.toLowerCase ()==="y") {
  alert ('You got it right');
  correctGuess+=1;
} else {
  alert ('You got it wrong, good luck with the next question');
};

var question5 = prompt ('Guess what is my favorite number between 1 & 9');
var guess= 3
var guessLeft = '[' + guess + ' Guess(es) Left]';

while (guess > 0) {
  if ( parseInt(question5)=== 7) {
    alert ('You got it Right');
    correctGuess+=1;
    guess=0;
  }  else if (question5 > 7) {
    question5= prompt ('Your guess is too High, Guess again ' + guessLeft)
    guess-=1;
    var guessLeft = '[' + guess + ' Guess(es) Left]';
  } else if (question5 < 7) {
    question5 = prompt ('Your guess is too Low, Guess again ' + guessLeft)
    guess-=1;
    var guessLeft = '[' + guess + ' Guess(es) Left]';
  } else {
    alert ('You got it wrong, lets move on to next quiz?');
  }
}

var rightAnswer=['montana','california', 'florida', 'oregon'];
var answerWasFound=false;
var question6= prompt ('What states have I lived in besides Washington?');
for (var i = 0; i < rightAnswer.length; i++) {
  if (question6.toLowerCase() === rightAnswer[i]) {
    alert('You guessed it right');
    answerWasFound=true;
    break;
  }
}
if (answerWasFound===false) {
  alert('You guessed it wrong');
}

 alert ('You got ' + correctGuess + ' out of 6 questions correct')


  if (correctGuess >= 4) {
document.write("<p><strong>You Earned a Gold Medal</strong></p>");
}
else if (correctGuess >= 3) {
document.write("<p><strong>You Earned a Silver Medal</strong></p>");
}
else if (correctGuess >= 2) {
document.write("<p><strong>You Earned a Bronze Medal</strong></p>");
}
else {
document.write ('<p><strong>You Earned No Medal</strong></p>');
}
