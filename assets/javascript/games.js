$(document).ready(function () {

// set up variables
let randomNumber;
let blueCrystal =$("<button>");
let yellowCrystal = $("<button>");
let redCrystal = $("<button>");
let pinkCrystal = $("<button>");
let numWins = 0;
let numLoss = 0;
let userScore = 0;
randomNumberFunction (randomNumber, blueCrystal, yellowCrystal, redCrystal, pinkCrystal) 

// this function assigns random numbers for the user to match and to the crystals
function randomNumberFunction (randomNumber, blueCrystal, yellowCrystal, redCrystal, pinkCrystal) {
    randomNumber = Math.floor(Math.random() * 102 + 19);
    blueCrystal = Math.floor(Math.random() * 12 + 1);
    yellowCrystal = Math.floor(Math.random() * 12 + 1);
    redCrystal = Math.floor(Math.random() * 12 + 1);
    pinkCrystal = Math.floor(Math.random() * 12 + 1);
    console.log ("random number = " + randomNumber);
    console.log ("blue = " + blueCrystal);
    console.log ("red = " + redCrystal);
    console.log ("pink = " + pinkCrystal);
    console.log ("yellow = " + yellowCrystal);

}



});
