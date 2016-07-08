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

        // update the panel text
        janePane.innerHTML = "<p>由于网络问题。。。所以Jane姐的farewell视频无法顺利播放（中国连接我的服务器不太顺畅，实在影响观感。。。），我只好请临时演员大灰兔同学登场客串一下，敬请包涵。🚙 🚕 🚐</p><p>SORRY EVERYONE! 想看Jane姐视频的请出门转左找Annie Lin ^_^</p>";

    })

    // pause the movie and show the content panel when the movie ends
    vid.addEventListener('ended', function() {

        // only functional if "loop" is removed
        vid.pause();

        // remove the hiddenPane class to display the content panel
        janePane.className = "";
    });

    
});
