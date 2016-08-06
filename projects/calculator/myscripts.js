$(document).ready(function () {

    // retrieve the element where the result should be displayed
    var screen  = document.querySelector("#result");

    // record all buttons that are clicked
    var expression = [];

    // convert all the clicked buttons to a legal math expression
    var mathExpression;

    // The onclick property returns the click event handler code on the current element.
    button0.onclick   = addValue;
    button1.onclick   = addValue;
    button2.onclick   = addValue;
    button3.onclick   = addValue;
    button4.onclick   = addValue;
    button5.onclick   = addValue;
    button6.onclick   = addValue;
    button7.onclick   = addValue;
    button8.onclick   = addValue;
    button9.onclick   = addValue;
    equal.onclick     = addValue;
    add.onclick       = addValue;
    subtract.onclick  = addValue;
    mult.onclick      = addValue;
    div.onclick       = addValue;
    del.onclick       = addValue;
    allclear.onclick  = addValue;
    buttondot.onclick = addValue;
    bomb.onclick      = addValue;
    github.onclick    = addValue;

    // initialize the display
    display("Hello World!");

    // display the result
    function display(value) {
        screen.textContent = value;
    }

    // handle the button clicks
    function addValue(buttonClicked) {

        // retrieve the value of the clicked button
        var buttonValue = buttonClicked.target.value;
        console.log(buttonValue);

        if(buttonValue == '=') {
            // get the result of the math expression
            mathExpression = eval(mathExpression);
            // reset the expression array
            expression.length = 0;
            // store the result to the expression array
            expression.push(mathExpression);
            console.log("expression: " + expression);
        }

        // reset the expression array and the mathExpression
        else if(buttonValue == 'allclear') {
            mathExpression = expression.length = 0;
        }

        // remove the last clicked button from expression array
        else if(buttonValue == 'del'){
            expression.pop();
            mathExpression = expression.join('');
            if(expression.length == 0){
                mathExpression = "0";
            }
        }

        else if(buttonValue == 'bomb'){
            $("#container").addClass("animated shake").delay(1000).queue(function () {
                $("#container").removeClass("animated shake").dequeue();
            });

            mathExpression = "Calculator Destroyed!";
        }

        else if(buttonValue == 'github'){
            window.open('https://github.com/dennisboys');

            mathExpression = "Hello Github!";
        }

        // when numbers or operators are clicked
        else {
            // add the button value to the array
            expression.push(buttonValue);
            // join all the values in the array to form a legal math expression
            mathExpression = expression.join('');
            console.log("expression: " + expression);
            console.log("mathExpression: " + mathExpression);
        }

        // display the result
        display(mathExpression);

    }


});
