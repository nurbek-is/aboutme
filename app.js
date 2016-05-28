var userInput= prompt("Welcome to my App, What is Your Name?");
var welcome= alert ('Hello ' + userInput + ',  let\'s play guessing game, if you guess correctly you will get a medal in the end');
var correctGuess=0

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
var question4 = prompt ('Is Aquire my favorite board game, Yes or NO');
if (question1.toLowerCase ()==="yes" || question1.toLowerCase ()==="n") {
  alert ('You got it right');
  correctGuess+=1;
} else {
  alert ('You got it wrong, good luck with the next question');
};

var question5 = prompt ('Guess what is my favorite number between 1 & 9');
var guessRemaining= 4

while (guessRemaining > 0) {
  if ( parseInt(question5)=== 7) {
    alert ('You got it right');
    correctGuess+=1;
    guessRemaining=0;
  }  else if (question5 > 7) {
    question5= prompt ('Your guess is too high, Guess again')
    guessRemaining-=1;
  } else if (question5 < 7) {
    question5 = prompt ('Your guess is too low, Guess again')
    guessRemaining-=1;
  }  else {
    alert ('You got it wrong, Now are you ready to find out the results?');
  }
}
var question6 = prompt ['washington','texas', 'florida', 'virginia'];

 alert ('You got ' + correctGuess + ' out of 6 questions correct')


  if (correctGuess === 4) {
alert ('Your earned a Gold crown');
}
else if (correctGuess >= 3) {
alert ('Your earned a Silver crown');
}
else if (correctGuess >= 2) {
alert ('Your earned a Bronze crown');
}
else {
  alert ('Your earned No crown');
}
