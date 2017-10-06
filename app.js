'use strict';

var userPoints = 0;

alert('Hey there, I think you are about to play a game');

//get user name
var user = prompt('Great, my name is Dennis...what is yours?');
console.log('The users name is ' + user);

alert('The game is called Guess About Me. Your job is to answer questions yes or no with a y or n.');

//quiz questions
var questions = [
  ['Do you think I am male? Type y or n.', 'y'],
  ['Do you think I\'m old? Type y or n.', 'n'],
  ['Am I older than Janet Jackson', 'y'],
  ['Have I been to Mogadishu?', 'y'],
  ['Am I going to make it through Code 201?', 'y']
];

var askQuestion = function(q, a) {
  var answer = prompt(q).toLowerCase();
  console.log('user is asked ' + q + '. and answered ' + answer);
  if (answer === a) {
    userPoints++;
    console.log('user points: ' + userPoints);
    alert('Whew...glad you got that right ' + user + '. You have ' + userPoints );
    console.log('user congrats');
  } else {
    alert(user + 'Wrong! Womp-womp-wooommppp. You have ' + userPoints + '.');
    console.log('user missed question. user points: ' + userPoints + '. user answer was ' + answer + ' vs ' + a);
  }
};

for (var i = 0; i < 5; i++) {
  askQuestion(questions[i][0], questions[i][1]);
  console.log('Question iteration: ' + (i + 1));
}

//question 6 items
// var oldPoints = userPoints;
var guess = 0;
var morePoint = true;
while (guess < 3 && morePoint) {
  var answer6 = prompt('Guess how many countries I have lived in ' + user + ' ? Please input a number on this question');
  console.log('asks user to guess how many countries I\'ve lived in');
  if(answer6 == 3) {
    alert('wow, you got it right ' + user);
    userPoints++;
    morePoint = false;
    alert('You have ' + userPoints + ' points ' + user);
  } else if (answer6 > 3){
    alert('Go ahead and try again ' + user + ' Your answer is too high');
    guess++;
  } else if (answer6 < 3){
    alert('Go ahead and try again ' + user + ' Your answer is too low!');
    guess++;
  } else {
    //if they don't put in a number.
  }
}
alert('At this time ' + user + ' You have ' + userPoints + ' points');
console.log('lets user know how many points he has so far');

// //question 7 items
// var newGuess = 0;
// var myCountries = ['UNITED STATES' , 'GERMANY' , 'THAILAND'];
// while (newGuess < 5){
//   var answer7 = prompt('Hey ' + user + ' Can you guess one of the countries I\'ve lived in? This is not yes/no. I actually want you to type in a country').toUpperCase();;
//   console.log('asking ' + user + ' to input a guess of any of the countries I\'ve lived in.');
//
//   if(answer7 === myCountries[0] || answer7 === myCountries[1] || answer7 === myCountries[2]){
//     alert('Wow are you psychic, ' + user + '?');
//     console.log('Checks to see if user guesses a country correctly');
//     userPoints++;
//     newGuess = 6;
//   } else if(answer7 !== myCountries[0] || answer7 !== myCountries[1] || answer7 !== myCountries[2]){
//     alert('Nope ' + user + ' I have never lived there. Try again');
//     newGuess++;
//   };
//   alert(' Well ' + user + ' you got ' + userPoints + ' out of 7 questions correct!');
// }
