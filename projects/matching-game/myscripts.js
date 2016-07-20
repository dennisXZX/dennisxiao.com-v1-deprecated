// each time increase 5
var numOfFace = 5;
// start at level 1
var level = 1;
// timer
var time = 30;

$(document).ready(function () {

    // initialize the game
    generateFiveFace(numOfFace);

    // set a timer for the game
    var gameTimer = setInterval(function () {

        // update the time
        time--;

        // display the new time
        $("#timer").text("Timer: " + time);

        // the user runs out of time
        if(time == 0){

            // disable the timer
            clearInterval(gameTimer);

            // display a message
            alert("Game Over! \nYou are stuck at level " + level);

            // remove the click listener
            $("#leftSide img").off("click");

            // circle the right answer
            $("#leftSide img:last-child").css("background-color", "red");

        }

    }, 1000);

    // generate 5 faces each time this method is called
    function generateFiveFace(numberOfFace) {

        // generate five face using a for loop
        for(var i=0; i<numberOfFace; i++){

            // generate random positions for each face
            var randomTop = Math.random() * 390;
            var randomLeft = Math.random() * 450;

            // create a new img node
            var imgLeft = $('<img src="smile.png" />');
            // set top and left for the img node
            imgLeft.css("top", randomTop);
            imgLeft.css("left", randomLeft);

            // append the img node to the left div
            imgLeft.appendTo("#leftSide");

            // clone the img node and append it to the right div
            var imgRight = imgLeft.clone();
            imgRight.appendTo("#rightSide");

        }

        // remove the last img on the right, so to create the difference.
        $("#rightSide img:last-child").remove();

        // monitor if the user finds the right one
        $("#leftSide img:last-child").on("click", function () {

            // remove all the faces from both left and right divs
            $("#leftSide").empty();
            $("#rightSide").empty();

            // update the number of faces for the next level
            numOfFace+=5;
            // update the level
            level++;
            // reset the time
            time = 30;
            // generate a new set of faces
            generateFiveFace(numOfFace);

        });

        // monitor if the user chooses a wrong face
        $("#leftSide img:not(:last-child)").on("click", function () {

            // display a message
            alert("Game Over! \nYou are stuck at level " + level);

            // remove all the click listeners from img tag
            $("#leftSide img").off("click");

            // highlight the right answer
            $("#leftSide img:last-child").css("background-color", "red");

            // disable the timer
            clearInterval(gameTimer);

        });

    } // end of generateFiveFace(numberOfFace)

});
