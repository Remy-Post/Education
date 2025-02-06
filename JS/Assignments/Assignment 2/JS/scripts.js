// constants for query selector

// Button 1
const b1 = document.querySelector('button:nth-of-type(1)');
// Button 2
const b2 = document.querySelector('button:nth-of-type(2)');

// Input 1
const i1 = document.querySelector('input');

// Paragraph
const p = document.querySelector('#myStudentId'); 

// Select
const s = document.querySelector('select');



b1.addEventListener("click", changeCustomColor);
b2.addEventListener("click", changeRandomColor);

s.addEventListener("click", addList); 

s.addEventListener("change", changeImage);

const SRC = Array('./images/img1.jpg', './images/img2.jpg', './images/img3.jpg', './images/img4.jpg', './images/img5.jpg');
const ALT = Array('Nature','Tree', 'mountain', 'deer', 'river');
var LogI = Array();

var color;
// function to change bg color from user input and add student id
function Id(){
    if (!p.textContent.includes('200605022')) {
        p.textContent += ' 200605022';
    }
}

function changeCustomColor() {
    Id();

    if (typeof Number(i1.value) !== 'number') 
        alert('Custom color button clicked'+'\n\nThe value is '+i1.value+"\tParsing:"+Number.isInteger(i1.value));
    try {
        if (Number(i1.value) >= 0 && Number(i1.value) <= 100) {
            color = Number(i1.value);
            if (color >= 80 && color <= 100) {
                document.querySelector('html').style.backgroundColor  = 'yellow';   
            }
            else if (color >= 60 && color <= 80) {
                document.querySelector('html').style.background  = 'purple';
            }
            else if (color >= 40 && color <= 60) {
                document.querySelector('html').style.backgroundColor = 'orange';
            }
            else if (color >= 20 && color <= 40) {
                document.querySelector('html').style.backgroundColor = 'blue';
            }
            else {
                document.querySelector('html').style.backgroundColor = 'green';
            }
        }
        else {
            document.querySelector('html').style.backgroundColor = 'red';
        }
    } catch (error) {
        document.html.style.backgroundColor = 'lightgray';
        alert('Please enter a valid number.\tError message: ' + error);
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    color = Math.floor(Math.random() * 100);
    i1.value = color;
    changeCustomColor();
    Id();
    
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
    if (s.length === 1) {
        for (let i = 0; i < ALT.length; i++){
            let option = document.createElement('option');
            option.textContent = 'Img: '+(i+1);
            s.appendChild(option);
        }
    }
    Id();
     
}

// function to change image
// function to change image
function changeImage() {
    if (document.querySelector('div:nth-of-type(3) img').style.visibility === 'visible') {
        var div = document.querySelector('body > main > div:nth-of-type(3)').style;

        div.width = '32%';
        div.height = '40%';
        div.display= 'grid';
        div.justifyContent= 'center';
        div.alignItems= 'center';
        div.gridTemplateColumns= 'repeat(2, 50%)';        


        document.querySelector('div:nth-of-type(3) label').classList.add('box1');
        document.querySelector('select').classList.add('box1');
        document.querySelectorAll('.box1').forEach(element => {
            element.style.gridColumn= '1';
            element.style.justifyContent= 'center';
            element.style.alignSeft= 'flex-end';
            element.style.width = '80%';
            element.style.textAlign = 'center';
        });

        var box2 = document.querySelector('div:nth-of-type(3) img');
        box2.gridColumn= '2';
        box2.justifyContent= 'center';
        box2.alignItems= 'center';
        box2.width = '80%';
        box2.height = 'auto';

        
    }

    var picture = document.querySelector('#images');


    picture.style.width = '200px';
    picture.style.height = 'auto';
    
    if (s.value !== s[0].value) {
        LogI.unshift(s.value);
        footer();
        pickImg(picture, LogI[0]);
        picture.style.visibility = 'visible';
    }
}

function pickImg(picture, position){
    if (position == 'Img: 1'){
        picture.src = SRC[0];
        picture.alt = ALT[0];
    }
    else if (position == 'Img: 2'){
        picture.src = SRC[1];
        picture.alt = ALT[1];
    }
    else if (position == 'Img: 3'){
        picture.src = SRC[2];
        picture.alt = ALT[2];
    }
    else if (position == 'Img: 4'){
        picture.src = SRC[3];
        picture.alt = ALT[3];
    }
    else if (position == 'Img: 5'){
        picture.src = SRC[4];
        picture.alt = ALT[4];
    }
}

function footer() {
    var footer = document.querySelector('footer');
    // Reset the footer content
    footer.innerHTML = null;

    // Create a new image element
    var image = document.createElement('img');
    image.style.height = '7rem';
    image.style.width = 'auto';

    // Pick the image based on the first element in LogI
    pickImg(image, LogI[0]);


    footer.appendChild(image);

    // Append additional images if LogI has more elements
    if (LogI.length >= 2) {
        var image = document.createElement('img');
        pickImg(image, LogI[1]);
        footer.appendChild(image);
    }

    if (LogI.length >= 3) {
        var image = document.createElement('img');
        pickImg(image, LogI[2]);
        footer.appendChild(image);
    }

    if (LogI.length >= 4) {
        var image = document.createElement('img');
        pickImg(image, LogI[3]);
        footer.appendChild(image);
    }

    if (LogI.length >= 5) {
        var image = document.createElement('img');
        pickImg(image, LogI[4]);
        footer.appendChild(image);
    }

    if (LogI.length >= 6) {
        var image = document.createElement('img');
        pickImg(image, LogI[5]);
        footer.appendChild(image);
    }

    document.querySelector('footer').style.display = 'flex';
    document.querySelector('footer').style.justifyContent = 'space-evenly';
    document.querySelector('footer').style.alignItems = 'flex-bottom';
    document.querySelector('footer').style.flexWrap = 'wrap';
    document.querySelectorAll('img').forEach(element => {
        element.style.width = '15vw';
        element.style.height = 'auto';
    });

}

document.querySelector('button:nth-of-type(3)').addEventListener('click', function() {
    LogI = Array();
    document.querySelector('footer').innerHTML = null;
});

// event listeners for on click event of buttons and select

// event listeners for on change event of select
