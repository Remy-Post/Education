//Variables 
NAMES = Array("name1", "name2", "name3", "name4", "name5");
IMAGES = Array(Array("",""), Array("",""), Array("",""), Array("",""), Array("",""));

        //Defines the Alt of the image 
for (let i = 0; i < 5; i++){
    IMAGES[i][0] = `This is the ${i}th image of ${NAMES[i]}`;
}

TEXT = Array("Text 1", "Text 2", "Text 3", "Text 4", "Text 5");

//Boxes
let contentBox = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(2)");
let mainContentArea = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(2) > div:nth-of-type(1)");

let titleBox = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)");
let reviewBox = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)");

        //Text
let title = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > h3");
let review = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > p");

// Unwanted Boxes
let others = document.querySelector("article");
let serviceTime = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(2) > article > section:nth-of-type(1)");
let starsGiven = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(2) > article > section:nth-of-type(2)");

// Nav
let nav = document.querySelector("nav");
let iconsBox = document.querySelectorAll("body header > div > section:nth-of-type(2) > nav > div");
let icon = document.querySelectorAll("body header > div > section:nth-of-type(2) > nav > div a img");

for (let i = 0; i < 4; i++)
{
     iconsBox[i].addEventListener("mouseover",function(){
        this.style.width = "90px";
        this.style.height = "90px";
        icon[i].style.height = "75px";
        icon[i].style.width = "75px";
     });
     iconsBox[i].addEventListener("mouseout", function(){
        this.style.width = "60px";
        this.style.height = "60px";
        icon[i].style.height = "45px";
        icon[i].style.width = "45px";
   });
};

        //Adds a event listener to each button
for (let i = 1; i <= 5; i++){
    document.querySelector(`button:nth-of-type(${i})`).addEventListener('click', function(){
        document.querySelector("#photo").src = IMAGES[this.value-1][1];
        console.log(document.querySelector("#photo").scr);

        changeReview(this.value)
    });
}

function changeReview(index){

    starsGiven.style.display = "none";  //Remove unwanted Stars Given
    others.style.display = "none";  //Remove unwanted boxes
    serviceTime.style.display = "none";  //Remove unwanted Service Time


       //CSS

    //Content Box
    {
                //Content Display
        contentBox.style.display = "flex";
            {         //Remove any grid formating
                contentBox.style.gridTemplateColumns = "none";
                contentBox.style.gridTemplateRows = "none";
            }

                //Flex Properties
        contentBox.style.justifyContent = 'center';
        contentBox.style.alignItems = "center";
        contentBox.style.borderRadius = "10px";
    }

    //Review Box
    {
                //Box Dimentions
        mainContentArea.style.width = "90%";
        mainContentArea.style.height = "90%";

                //Box Format
        mainContentArea.style.borderRadius = "10px";

                //Box Dispaly
        mainContentArea.style.display = "flex";

                //Flex Properties
        mainContentArea.style.flexDirection = "column";
        mainContentArea.style.justifyContent = "space-evenly";
        mainContentArea.style.alignItems = "center";
    }

    //Title Box
    {
                //Box Display
        titleBox.style.display = "none";
    }

    //Review Box
    {
                //Box Dimentions
        reviewBox.style.width = "90%";
        reviewBox.style.height = "80%";

                //Box Format
        reviewBox.style.borderRadius = "10px";
        reviewBox.style.backgroundColor = "white";

                //Box Dispaly
        reviewBox.style.display = "flex";

                //Flex Properties
        reviewBox.style.justifyContent = "center";
        reviewBox.style.alignItems = "center";
    }


            //Replacing the Title
    title = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(1) > h3");
    title.innerHTML = `Review by: ${NAMES[index-1]}`;
    
            //Replacing the Review
    review = document.querySelector("body main > section:nth-of-type(3) > section:nth-of-type(2) > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > p");
    review.innerHTML = TEXT[index-1];

    

}



    