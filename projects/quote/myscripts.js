// an array of colors
var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    "#472E32",
    "#77B1A9",
    "#73A857"
];

// an array of quotes
var quotes = [
    "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    "To iterate is human, to recurse divine.",
    "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
    "I don't care if it works on your machine! We are not shipping your machine!",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    "Before software can be reusable it first has to be usable.",
    "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job."
];

// an array of authors
var authors = [
    "C.A.R. Hoare",
    "Martin Golding",
    "Linus Torvalds",
    "L. Peter Deutsch",
    "Seymour Cray",
    "Vidiu Platon",
    "Bill Gates",
    "Ralph Johnson",
    "Mosher’s Law of Software Engineering"
];

// initialize two variable to hold random quote and author
var currentQuote = '';
var currentAuthor = '';

// open a url
function openURL(url) {
    window.open(url, "", 'width=550, height=400');
}

// get a random quote
function getQuote() {

    // retrieve a random quote and author from the arrays
    var randomIndex = Math.floor((Math.random() * quotes.length));

    currentQuote = quotes[randomIndex];
    currentAuthor = authors[randomIndex];

    // display the quote
    // first set the opacity to 0, and then upon finishing set it again to 1
    $(".quote-text").animate({
            opacity: 0
        }, 500,
        function () {
            $(this).animate({
                opacity: 1
            }, 500);
            $('#text').text(currentQuote);
        });

    // display the author
    // first set the opacity to 0, and then upon finishing set it again to 1
    $(".quote-author").animate({
            opacity: 0
        }, 500,
        function () {
            $(this).animate({
                opacity: 1
            }, 500);
            $('#author').html(currentAuthor);
        });

    // get a random color
    var color = Math.floor(Math.random() * colors.length);

    // change the color of body and text
    $("body").animate({
        backgroundColor: colors[color],
        color: colors[color]
    }, 1000);

    // change the color of the button
    $(".button").animate({
        backgroundColor: colors[color]
    }, 1000);

}

$(document).ready(function () {

    // activate getQuote method on click event
    $("#new-quote").on('click', getQuote);

    // twitter button
    $("#tweet-quote").on('click', function () {
            openURL('https://twitter.com/intent/tweet?hashtags=quoteOfTheDay&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    });

    // crazy button
    $("#crazy-quote").on('click', function () {
        // add a class first then after one second remove the added class
        // warning: must dequeue()
        $(".quote-text").addClass("animated tada").delay(1000).queue(function () {
            $(".quote-text").removeClass("animated tada").dequeue();
        })
    });

});