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
    let buttonFile = "assets/images/";
    let buttonPicture;
    let buttonImg;
    let crystalArray = [];

    startGame();
    $("#crystals").on("click", ".crystal-button", function () {

        // get value of button clicked and add to players score
        // save players score in a holder so that can update player score dynamically
        crystalValue = $(this).attr("data-crystal");
        crystalValue = parseInt(crystalValue);
        playerScore = playerScore + crystalValue;
        $("#playerScore").text("Your Score: " + playerScore);
        if (playerScore < randomNumber) {
            return;
        }
        else {
            if (playerScore === randomNumber) {

                alert("You Win:  " + playerScore);
                numWins++;
            }
            else {

                alert("You Lose:  " + playerScore);
                numLoss++;
            }
            setTimeout(function () { startGame(); }, 1000);

        }
    });

    //This function is called when starting a new game
    //clears previous game, gets new random numbers for random number and crytals

    function startGame() {
        // clear all variables
        $("#matchRandomNumber, #numWins, #numLosses, #playerScore, #crystals").empty();

        // get random number to match
        randomNumber = Math.floor(Math.random() * 102 + 19);

        //players score is set to 0
        playerScore = 0;

        //initialize array that holds crystal values
        for (var i=0; i < numCrystals; i++) {
            crystalArray [i] = "0";
        }

        // Assign random numbers to crystals, each crystal should have a unique random number
        for (i = 0; i < numCrystals; i++) {
            let crystalBtn = $("<img>");
            crystalBtn.addClass("crystal-button crystal crystal-button-image");
            crystalValue = Math.floor(Math.random() * 12 + 1);
            buttonPicture = buttonFile + crystalImages[i] + (".jpg");
            crystalBtn.attr("src", buttonPicture);
            $(".crystal-button-image").css("width", 250);
            $(".crystal-button-image").css("height", 250);

            //check to ensure each crystal has a different random number
            let numInCrystal = crystalArray.includes(crystalValue);
            while (numInCrystal) {
                crystalValue = Math.floor(Math.random() * 12 + 1);
                numInCrystal = crystalArray.includes(crystalValue);

            }
            crystalBtn.attr("data-crystal", crystalValue);
            crystalArray[i] = crystalValue;
            // display crystals    
            $("#crystals").append(crystalBtn);
        }
        // display new game board dynamically    
        $("#matchRandomNumber").append("Random Number:  " + randomNumber);
        $("#numWins").append("Wins:  " + numWins);
        $("#numLosses").append("Losses: " + numLoss);
        $("#playerScore").append("Your Score:  " + playerScore);
    }



});
