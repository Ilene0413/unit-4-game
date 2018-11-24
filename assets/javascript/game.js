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

    console.log("before start game and clic");
    startGame();
    console.log("after first start game");
    $("#crystals").on("click", ".crystal-button", function () {

        // get value of button clicked and add to players score
        // save players score in a holder so that can update player score dynamically
        console.log("crystal clicked");
        crystalValue = $(this).attr("data-crystal");
        console.log("crystal value is" + crystalValue);
        crystalValue = parseInt(crystalValue);
        playerScore = playerScore + crystalValue;
        console.log("players Score is " + playerScore);
        $("#playerScore").text("Your Score:  " + playerScore);
        if (playerScore < randomNumber) {
            return;
        }
        else {
            if (playerScore === randomNumber) {
                alert("You Win" + playerScore);
                numWins++;
                console.log("out of start game win");
            }
            else {
                alert("You Lose" + playerScore);
                numLoss++;
                console.log("out of start game lose");
            }
            startGame();
            console.log('back from start game after game over');
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

        // Assign random numbers to crystals
        for (var i = 0; i < numCrystals; i++) {
            let crystalBtn = $("<button>");
            crystalBtn.addClass("crystal-button crystal crystal-button-image");
            crystalValue = Math.floor(Math.random() * 12 + 1);
            crystalBtn.attr("data-crystal", crystalValue);
            console.log("crystal button i " + crystalValue);
            buttonPicture = buttonFile + crystalImages[i] + (".jpg");
            //           $(".crystal-button-image").css("background-image", "url('/assets/images/ruby gem.jpg')");
            //            crystalBtn.attr("crystal-button-immage", buttonPicture);

            console.log("button picture is " + buttonPicture);
            //$( "crystalBtn" ).text( $( "buttonPicture" ).attr( crystalImages[i]));
            crystalBtn.text(buttonPicture);
            // display crystals    
            $("#crystals").append(crystalBtn);
            //            $("#crystals").append(crystalBtn).append("<img src=buttonPicture height=100 width=100/>").button();
        }
        console.log("out of for loop");
        //        displayGame();
        //   }
        //   function displayGame() {
        // display new game board dynamically    
        $("#matchRandomNumber").append("Random Number:  " + randomNumber);
        console.log('after match random');
        $("#numWins").append("Wins:  " + numWins);
        console.log("after numwins");
        $("#numLosses").append("Losses: " + numLoss);
        console.log('after  num losses');
        $("#playerScore").append("Your Score:  " + playerScore);
        console.log("after player score");
    }

});
