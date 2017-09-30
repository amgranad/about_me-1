'use strict';

var userPoints = 0;

alert('Hey there, I think you are about to play a game');

var user = prompt('Great, my name is Dennis...what is yours?');
console.log('The users name is ' + user);

alert('The game is called Guess About Me. Your job is to answer questions yes or no with a Y or N.');

var answer1 = prompt('Do you think I am male? Type yes or no.').toLowerCase();
console.log('Asking am I a guy');

if(answer1 === 'Y' || answer1 === 'y') {
  alert('Whew...glad you got that right ' + user);
  userPoints++;
  alert('You have ' + userPoints + ' point ' + user);
} else {
  alert(user + ' Ya, might want to go see the optometrist');
  userPoints = userPoints - 1;
  alert('You have ' + userPoints + ' point ' + user);
}
var answer2 = prompt(user + ' Do you think I\'m old?');
console.log('Do they think I am the crypt keeper?');

if(answer2 === 'N' || answer2 === 'n') {
  alert('Thanks ' + user + ' for not thinking I\'m the crypt keeper');
  userPoints++;
  alert('You have ' + userPoints + 'points ' + user);
} else {
  alert('Yes ' + user + '...I was on the Ark...smart arse!');
  userPoints = userPoints - 1;
  alert('You have ' + userPoints + ' point ' + user);
}
var answer3 = prompt('Am I older than Janet Jackson? ' + user);
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
var answer4 = prompt('Have I been to Mogadishu ' + user + '?');
console.log('Everybody was Kung Fu Fighting...');

if(answer4 === 'Y' || answer4 === 'y') {
  alert('Yeah ' + user + ' been there, done that, got the T-shirt');
  userPoints++;
  alert('You have ' + userPoints + ' points ' + user);
} else {
  alert('Really ' + user + ' all this ruggedness and you...wowee!');
  userPoints = userPoints - 1;
  alert('You have ' + userPoints + ' point ' + user);
}
alert(user + ' This is the last question...R U ready? Go on, hit OK...don\'t be scared');
console.log('The final question');

var answer5 = prompt('Am I going to make it through Code 201? ' + user);
console.log('Does' + user + ' think I got the chops');

if(answer5 === 'Y' || answer5 === 'y') {
  alert('Yep ' + user + ' I think so too?');
  userPoints++;
  alert('You have ' + userPoints + ' points ' + user);
} else {
  alert('Well boooo to you toooo ' + user);
  userPoints = userPoints - 1;
  alert('You have ' + userPoints + ' point ' + user);
  alert('If you have any negative points or 0, you know me not!!!');
}
