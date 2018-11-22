$(document).ready(function () {

    // set up variables
    // random number, number of wins, number of losses, players score, crystal images
    let randomNumber;
    let numCrystals = 4;
    let numWins = 0;
    let numLoss = 0;
    let playerScore = 0;
    let crystalValue;
    let crystalImages = ["alexandrite-gemstone", "amber gems", "pink star gem", "ruby gem"];



    startGame();
    $(".crystal-button").on("click", function () {
        crystalValue = $(this).attr("data-crystal");
        console.log ("crystal value is" + crystalValue);
        crystalValue = parseInt(crystalValue);
        playerScore = playerScore + crystalValue;
        console.log ("players Score is " + playerScore);
        $("#playerScore").append("Your Score: " + playerScore);
    });

    //This function is called when starting a new game
    //sets players score to zero, gets new random numbers for random number and crytals, and hides the crystal's value

    function startGame() {
        // get random numbers
        randomNumber = Math.floor(Math.random() * 102 + 19);

        // Assign random numbers for the user to match and to the crystals
        for (var i = 0; i < numCrystals; i++) {
            let crystalBtn = $("<button>");
            crystalBtn.addClass("crystal-button crystal crystal-button-color");
            crystalValue = Math.floor(Math.random() * 12 + 1);
            crystalBtn.attr("data-crystal", crystalValue);
            crystalBtn.text(crystalValue);
        //    crystalBtn.attr("hidden", true);
            
            $("#crystals").append(crystalBtn);
        }

        // display new game board dynamically    
        $("#matchRandomNumber").append("Random Number: " + randomNumber);
        $("#numWins").append("Wins:" + numWins);
        $("#numLosses").append("Losses: " + numLoss);
        $("#playerScore").append("Your Score: " + playerScore);
    }



});
