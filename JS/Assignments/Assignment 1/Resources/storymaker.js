// Assignment 1 | COMP1073 Client-Side JavaScript Done With OOP

/* Variables
-------------------------------------------------- */


// Constants for main button query selectors
const b1 = document.getElementById('noun1');     // b1 = Noun
const b2 = document.getElementById('verb');      // b2 = Verv
const b3 = document.getElementById('adjective'); // b3 = Adjective
const b4 = document.querySelector('#noun2');     // b4 = Noun
const b5 = document.querySelector('#setting');   // b5 = Setting/Place

// Constants for p tag to display query selectors
const p1 = document.querySelector('#choosenNoun1');    // b1 pushed -> p1 displays noun
const p2 = document.querySelector('#choosenVerb');     // b2 pushed -> p2 displays verb
const p3 = document.querySelector('#choosenAdjective');// b3 pushed -> p3 displays adjective
const p4 = document.getElementById('choosenNoun2');    // b4 pushed -> p4 displays noun
const p5 = document.getElementById('choosenSetting');  // b5 pushed -> p5 displays setting
                                                       // b(n) pushed -> p(n) displays grammatical element
// Constants for final buttons and p tags

    //Final buttons
    const f1 = document.querySelector('#playback');    // f1 = Playback 
    const f2 = document.getElementById('random');      // f2 = Random

    //Final p tags
    const s1 = document.querySelector('#story');      // s1 = Story

                                                      // b(n) pushed -> p(n) displays grammatical element; Where b is a button, and p is a paragraph element

                                                      // f(n) pushed -> s1 displays a story; Where f is a 'Final' button, and s is a paragraph element displaying the story

// Variables for pre-defined arrays

  // Noun array ([b1, b4] -> [p1, p4]); Where b(n) -> p(n) is injective/one-to-one and n is either [1, 4]
  var NOUNS1 = ['The turkey', 'Mom', 'The cat', 'The dog', 'My teacher', 'The elephant']; // Nouns for b1
  var NOUNS2 = ['Goat', 'Monkey', 'Fish', 'Cow', 'Frog', 'Bug'];                          // Nouns for b4
  const NOUNS = NOUNS1.concat(NOUNS2);
  var LogN = Array();

  // Verb array ([b2] -> [p2]); Where b(2) -> p(2) is injective/one-to-one
  const VERBS = ['Sat on', 'Ate', 'Danced with', 'Saw', 'Doesn\'t like', 'Kissed'];
  var LogV = Array();

  // Adjective array ([b3] -> [p3]); Where b(3) -> p(3) is injective/one-to-one  
  const ADJECTIVES = ['A funny', 'A scary', 'A goofy', 'A slimy', 'A barking', 'A fat'];   //The last item ([5]), is not 2025 friendly XD
  var LogA = Array();
  
  // Setting/Place array ([b5] -> [p5]); Where b(5) -> p(5) is injective/one-to-one
  const SETTINGS = ['On the moon', 'On the chair', 'In my spehetti', 'In my soup', 'On the grass', 'In my shoes'];   
  var LogS = Array();

  var logStory = Array();
  /* KEY Take aways:
      Each array is a list of strings

      Each array is a grammatical element
           - Nouns: (NOUNS1[0-6] + NOUNS2[0-6] = NOUNS[0-13])
           - Verbs: VERBS[0-5]
           - Adjectives: ADJECTIVES[0-5]
           - Settings: SETTINGS[0-5]

      Each string starts with a capital letter
  */

// Variables for count to grab array elements

let c1 = randomNum(); /* count for NOUNS1*/     tc1 = 0; // total count for NOUNS1
let c2 = randomNum(); /* count for VERBS*/      tc2 = 0; // total count for VERBS
let c3 = randomNum(); /* count for ADJECTIVES*/ tc3 = 0; // total count for ADJECTIVES
let c4 = randomNum(); /* count for NOUNS2*/     tc4 = 0; // total count for NOUNS2
let c5 = randomNum(); /* count for SETTINGS*/   tc5 = 0; // total count for SETTINGS



b1.addEventListener('click', noun1_on_click);
b2.addEventListener('click', verb_on_click);
b3.addEventListener('click', adjective_on_click);
b4.addEventListener('click', noun2_on_click);
b5.addEventListener('click', setting_on_click);

f1.addEventListener('click', playback_on_click);
f2.addEventListener('click', random_on_click);
/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    c1 = check(c1);
    p1.textContent = Output(NOUNS1[c1]); // display noun
    c1 = increment(c1); 
}

function verb_on_click() {
    c2 = check(c2);
    p2.textContent = Output(VERBS[c2]); // display verb
    c2 = increment(c2);
    console.log(c2);
}

function adjective_on_click() {
    c3 = check(c3);
    p3.textContent = Output(ADJECTIVES[c3]); // display adjective
    c3 = increment(c3);
}

function noun2_on_click() {
    c4 = check(c4);
    p4.textContent = Output(NOUNS2[c4]); // display noun
    c4 = increment(c4);
}

function setting_on_click() {
    c5 = check(c5);
    p5.textContent = Output(SETTINGS[c5]); // display setting
    c5 = increment(c5);
}

// concatenate the user story and display
function playback_on_click() {
    if (validate()) {
        s1.textContent = story();
        save();
    }
    else {
        alert('Please Select Your Words');
    }
    display();
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {  
    p1.textContent = Output(NOUNS[randomNum()]);;
    p2.textContent = Output(VERBS[randomNum()]);
    p3.textContent = Output(ADJECTIVES[randomNum()]);
    p4.textContent = Output(NOUNS[randomNum()]);
    p5.textContent = Output(SETTINGS[randomNum()]);
    s1.textContent = story();
    save();
    display();
    
}

function story() {
    return p1.textContent + ' ' + p2.textContent + ' ' + p3.textContent + ' ' + p4.textContent + ' ' + p5.textContent + '.';
}

// generate a random number between 0 and 5
function randomNum() {
    return Math.floor(Math.random() * 6);
}

// output the value in lowercase
function Output(value){
    if (value === 'A fat') {
        value = 'A fa*';
    }
    return String(value).toLowerCase();
}

// validate the input(s)
function validate() {
    if (p1.textContent === '' || p2.textContent === '' || p3.textContent === '' || p4.textContent === '' || p5.textContent === '') {
        return false;
    }
    else {
        return true;
    }

}

// save the story
function save(){
    LogN.push(NOUNS1[c1]); LogN.push(NOUNS2[c4]);
    LogV.push(VERBS[c2]);
    LogA.push(ADJECTIVES[c3]);
    LogS.push(SETTINGS[c5]);
    logStory.unshift(s1.textContent);
}

// check if the number can fit into the arrays
function check(count) {
    if (count % 6 === 0) {
        count = 0;
    }
    return count;
}

function increment(count) {
    count++;
    return count;
}


//Resets all the nesseracy variables and clears the story
document.getElementById('reset').addEventListener('click', function() {
    logStory.forEach(element => {
        console.log(element);
    });
    p1.textContent = '';
    p2.textContent = '';
    p3.textContent = '';
    p4.textContent = '';
    p5.textContent = '';
    s1.textContent = '';
    c1 = randomNum();
    c2 = randomNum();
    c3 = randomNum();
    c4 = randomNum();
    c5 = randomNum();
    LogN = Array(null);
    LogV = Array(null);
    LogA = Array(null);
    LogS = Array(null);
    logStory = Array(null);
});

function display(){
    const story = document.getElementById('story');
    story.innerHTML = null; story.innerHTML = '';
    story.innerHTML = `<p>`+logStory[0]+`</p>`;
    if (logStory.length > 1) {
        story.innerHTML += `<p>`+logStory[1]+`</p>`;
    }
    if (logStory.length > 2) {
        story.innerHTML += `<p>`+logStory[2]+`</p>`;
    }
    console.log(logStory.length);
};

/* Event Listeners
-------------------------------------------------- */
