$(document).ready(function(){

    // get the DOM documents
    var vid = document.getElementById("bgvid");  // video container
    var playButton = document.querySelector("#jane button");  // play button
    var janePane = document.querySelector("#jane"); // content panel

    // hide the content panel when the play button is clicked
    playButton.addEventListener("click", function() {

        // hide the content panel
        janePane.classList.add("hiddenPane");

        // play the movie
        vid.play();

        // update the play button text
        playButton.innerHTML = "Play Again? 🚙 🚕 🚐";

    })

    // pause the movie and show the content panel when the movie ends
    vid.addEventListener('ended', function() {

        // only functional if "loop" is removed
        vid.pause();

        // remove the hiddenPane class to display the content panel
        janePane.className = "";
    });

    
});
