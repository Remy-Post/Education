/* Declare and initialize global variables
-------------------------------------------------- */
var pageBg = document.querySelector("html");
var sliders = document.querySelectorAll("input[type='range']");

LogC = Array();
var rgba = [0, 0, 0, 0];


for (let i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("change", function () {
        values();
        changeBg();
    });
};

function values(){
    for (var i = 0; i < sliders.length; i++) {
       rgba[i] = sliders[i].value;
    }

    LogC.unshift([...rgba]); // Cloning the array 
    console.log(rgba);
}

function changeBg () {
    pageBg.style.backgroundColor = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
}

document.querySelector('input[type="text"]').addEventListener('change', function() {
    try {
        pageBg.style.backgroundColor = this.value;
    } catch (error) {
        alert(`A error was found: ${error}`);
    }
});



function liniar(){
    var liniar;

    liniar = 'linear-gradient(to right, ';

    for (let i = 0; i < LogC.length && i < 3; i++) {
        liniar += `rgba(${LogC[i][0]}, ${LogC[i][1]}, ${LogC[i][2]}), `;
    }

    liniar = liniar.slice(0, liniar.length - 2) + ')';

    pageBg.style.background = liniar;
    /*background: linear-gradient(to left, red, blue, green, purple, orange);*/
}

document.querySelector("input[id='special']").addEventListener('change', function() {
    if (this.checked) {
        liniar();
    }
    else {
        pageBg.style.background = '';
        changeBg();
    }

});
/* Functions
-------------------------------------------------- */
// STEP 1: Write a function called changeRgb that accepts two 

//parameters, channel and value

// STEP 2: Build a switch based on the value of the channel 
//parameter (red, green, or blue) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

// STEP 3: Inside each case, update the appropriate 
// global rgb array element (0, 1, or 2)

// STEP 4: Return the updated rgb array back to the event handler


// STEP 5: Write a new function called writeCSS that accepts one parameter, the updated rgb array

/* STEP 6: Declare a new local variable called newColor that will contain the new string that will be used to update the CSS 
   background-color property in the following format: rgb(0,0,0) - initialize it with the start of the string, 'rgb(' */

// STEP 7: Create a while loop that iterates through the array passed into this function, called newRgb (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

// STEP 8: For each element of the array, add to the string newColor, the red, green, and blue values, each followed by a comma

// STEP 9: Slice off the last comma from the string contained by the variable, newColor - we don’t need it (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

// STEP 10: Finish off the newColor string by adding the closing ')'

// STEP 11: Return the string newColor back to the event handler

// STEP 12: Enjoy the application in your browser!

// This page inspired by https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values