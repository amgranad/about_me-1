'use strict';

var userPoints = 0;

alert('Hey there, I think you are about to play a game');

var user = prompt('Great, my name is Dennis...what is yours?');
console.log('The users name is ' + user);

alert('The game is called Guess About Me. Your job is to answer questions yes or no with a y or n.');

var answer1 = prompt('Do you think I am male? Type y or n.').toLowerCase();
console.log('Asking am I a guy');

if(answer1 === 'Y' || answer1 === 'y') {
  alert('Whew...glad you got that right ' + user);
  userPoints++;
  alert('You have ' + userPoints + ' point ' + user);
} else {
  alert(user + ' Ya, might want to go see the optometrist');
  userPoints = userPoints;
  alert('You have ' + userPoints + ' point ' + user);
}
var answer2 = prompt(user + ' Do you think I\'m old? Type y or n.').toLowerCase();
console.log('Do they think I am the crypt keeper?');

if(answer2 === 'N' || answer2 === 'n') {
  alert('Thanks ' + user + ' for not thinking I\'m the crypt keeper');
  userPoints++;
  alert('You have ' + userPoints + ' points ' + user);
} else {
  alert('Yes ' + user + '...I was on the Ark...smart arse!');
  userPoints = userPoints - 1;
  alert('You have ' + userPoints + ' point ' + user);
}
var answer3 = prompt('Am I older than Janet Jackson, ' + user + ' ?. Type y or n.').toLowerCase();
console.log('Asking about my baby!');

if(answer3 === 'Y' || answer3 === 'y') {
  alert('That is right ' + user + ' I am her sugar daddy...LOL!');
  userPoints++;
  alert('You have ' + userPoints + ' points ' + user);
} else {
  alert(user + ' Do you think Janet Jackson would rob the cradle?');
  userPoints = userPoints - 1;
  alert('You have ' + userPoints + ' point ' + user);
}
var answer4 = prompt('Have I been to Mogadishu ' + user + '?. Type y or n.').toLowerCase();
console.log('Everybody was Kung Fu Fighting...');

if(answer4 === 'Y' || answer4 === 'y') {
  alert('Yeah ' + user + ' been there, done that, got the T-shirt');
  userPoints++;
  alert('You have ' + userPoints + ' points ' + user);
} else {
  alert('Really ' + user + ' and let all this ruggedness go to waste!');
  userPoints = userPoints - 1;
  alert('You have ' + userPoints + ' point ' + user);
}
alert(user + ' This is the last question...R U ready? Go on, hit OK...don\'t be scared');
console.log('The final question');

var answer5 = prompt('Am I going to make it through Code 201? ' + user + ' Type y or n.').toLowerCase();
console.log('Answers if ' + user + ' thinks I got the chops');

if(answer5 === 'Y' || answer5 === 'y') {
  alert('Yep ' + user + ' I think so too?');
  userPoints++;
  alert('You have ' + userPoints + ' points ' + user);
} else {
  alert('Well boooo to you toooo ' + user);
  userPoints = userPoints - 1;
  alert('You have ' + userPoints + ' point(s) ' + user);

}
var oldPoints = userPoints;
var guess = 0;
var morePoint = true;
while (guess < 3 && morePoint){
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
  }
}
alert('At this time ' + user + ' You have ' + userPoints + ' points');
console.log('lets user know how many points he has so far');

var newGuess = 0;
var myCountries = ['UNITED STATES' , 'GERMANY' , 'THAILAND'];
while (newGuess < 5){
  var answer7 = prompt('Hey ' + user + ' Can you guess one of the countries I\'ve lived in? This is not yes/no. I actually want you to type in a country').toUpperCase();;
  console.log('asking ' + user + ' to input a guess of any of the countries I\'ve lived in.');

  if(answer7 === myCountries[0] || answer7 === myCountries[1] || answer7 === myCountries[2]){
    alert('Wow are you psychic, ' + user + '?');
    console.log('Checks to see if user guesses a country correctly');
    userPoints++;
    newGuess = 6;
  } else if(answer7 !== myCountries[0] || answer7 !== myCountries[1] || answer7 !== myCountries[2]){
    alert('Nope ' + user + ' I have never lived there. Try again');
    newGuess++;
  };
  alert(' Well ' + user + ' you got ' + userPoints + ' out of 7 questions correct!');
}
