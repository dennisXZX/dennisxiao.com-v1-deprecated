/**
 * Created by Dennis Xiao on 07-Nov-16.
 */

$( document ).ready(function() {

    // retrieve the elements from the DOM
    var $searchButton = $("#searchButton");
    var $searchWord = $("#searchWord");
    var $searchResult = $("#searchResult");

    // attach a button handler to the search button
    $searchButton.on("click", function () {
        verifySearchTerm();
        processData();
    }); // end of click handler

    // register a keypress handler
    $searchWord.keypress(function (e) {
        var key = e.which;
        if(key == 13) {   // the enter key code
            verifySearchTerm();
            processData();
        }
    });

    // check if the search term is empty
    function verifySearchTerm() {
        if($("#searchWord").val() == ""){
            alert("Please enter your search term.");
        }
    }

    // process the JSON data from Wiki
    function processData(){
        // retrieve the value from input box
        var searchTerm = $("#searchWord").val();

        // fire up a search query to wikipedia API
        // use https://crossorigin.me/ as a proxy to address Cross-Origin Request Blocked issue
        $.ajax({
            type: 'GET',
            url: 'https://crossorigin.me/https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + searchTerm,
            success: function (data) {

                console.log(data);

                // empty the list
                $searchResult.empty();

                // process the data
                $.each(data['query']['pages'], function (i, item) {
                    var listElement = "<li><a target='_blank' href='https://en.wikipedia.org/?curid=" + item['pageid'] + "'>" + item['title'] + " - " + item['extract'] + "</a></li>";
                    $searchResult.append(listElement);
                });
            }
        });
    }

});