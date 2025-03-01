const DEFAULTS = Array(document.querySelector("body main > section:nth-of-type(1)").innerHTML, document.querySelector("body main > section:nth-of-type(2)"), document.querySelector("body main > section:nth-of-type(3)")); 

// First Section
{
    const NAMES = Array("Michael", "Remy", "Robbie")
    const DESCRIPTIONS = Array("This is the description of michael", "This is the description of remy", "This is the description of robbie")

    // Univercial Selectors
    let mainContentArea = document.querySelectorAll("body main > section:nth-of-type(1) > div:nth-of-type(2)");
    let contentBox = document.querySelectorAll("body main > section:nth-of-type(1) > div:nth-of-type(2) > section");

    let titleBox = document.querySelectorAll("body main > section:nth-of-type(1) > div:nth-of-type(2) > section > div:nth-of-type(1)");
    let Title = document.querySelectorAll("body main > section:nth-of-type(1) > div:nth-of-type(2) > section > div:nth-of-type(1) > h3");
    let pageTitle = document.querySelector("body main > section:nth-of-type(1) > div:nth-of-type(1) > h3");
    let pageTitleBox = document.querySelector("body main > section:nth-of-type(1) > div:nth-of-type(1)");

    let descriptionBox = document.querySelectorAll("body main > section:nth-of-type(1) > div:nth-of-type(2) > section > div:nth-of-type(2)");
    let description = document.querySelectorAll("body main > section:nth-of-type(1) > div:nth-of-type(2) > section > div:nth-of-type(2) > p");


    // Add Event Listeners
    for (let i = 0; i < 3; i += 1){
        contentBox[i].addEventListener("click", modifyS1);
           
    }

    function resetS1(){
        document.querySelector("body > main > section:nth-of-type(1) > div:nth-of-type(1) > button").style.display = "none";
        pageTitle.innerHTML = "About Us";

        for (let i = 0; i < 3;i++)
        {
            box = contentBox[i];
            boxS = box.style;

            titleBoxS = titleBox[i].style;

            titleS = pageTitle;

            ptbs = pageTitleBox.style;


            boxS.background = "teal";
            boxS.display = "grid";
            boxS.width = "30%"; 
            boxS.height = "80%";

            titleBoxS.display = "flex";
            
            titleS.textAlign = "center";

            ptbs.display = "flex";
            ptbs.justifyContent = "center";
            ptbs.alignItems = "center";

        }



            // if ( != contentBox[j-1]){
            //     elementS.style.display = 'grid';
            // }
            // else{
            //     titleBox[j].style.display = "flex"
            //     Title[j].style.display = "flex"
            //     console.log("The Else is being thrown");
            //     elementS.display = "grid"
            //     this.style.width = "30%"
            //     this.style.height = "80%"            
            // }
    }

    function modifyS1()
    {// CSS

            //Content Box
        for (let j = 0, index = j; j < 3; j += 1){
            if (contentBox[j] == this)
            {
                

                //Title: "About Us"
                            /*Content*/
                

                //Box that has been clicked on
                            /*Box Position*/
                contentBox[j].style.justifySelf = "center";
                contentBox[j].style.alignSelf = "center"

                            /*Box Dimentions*/
                contentBox[j].style.width = "100%";
                contentBox[j].style.height = "90%";

                            /*Box Format*/
                contentBox[j].style.background = "transparent";
                contentBox[j].style.borderRadius = "10px";

                            /*Box Display*/
                contentBox[j].style.display = "flex";

                            /*Flex Properties*/
                contentBox[j].style.flexDirection = "column";
                contentBox[j].style.justifyContent = "space-evenly";
                contentBox[j].style.alignItems = "center";
            
                
                //Title Box
                                /*Box Display*/
                titleBox[j].style.display = "none";

                // Description Boxlet 
                                /*Box Position*/
                descriptionBox[j].style.justifySelf = "center";
                descriptionBox[j].style.alignSelf = "center";

                                /*Box Display*/
                descriptionBox[j].style.display = "flex";

                                /*Flex Properties*/
                descriptionBox[j].style.justifyContent = "center";
                descriptionBox[j].style.alignItems = "center";     
                
                //Text 
                                /*Text Position*/
                description[j].style.justifySelf = "center";
                description[j].style.alignSelf = "center";
                description[j].style.textAlign = "center"

                                /*Text Dimentions*/
                description[j].style.width = "90%";
                description[j].style.height = "90%";

                                /*Text Position*/
                document.querySelector("body main > section:nth-of-type(1) > div:nth-of-type(1) > h3").style.justifySelf = "center";
                document.querySelector("body main > section:nth-of-type(1) > div:nth-of-type(1) > h3").style.alignSelf = "center";

                //Section Title Box = pageTitleBox
                

                //Box Title
                                /*Box Display*/
                pageTitleBox.style.display = "grid";

                                /*Grid Properties*/
                pageTitleBox.style.gridTemplateColumns = "100%";
                pageTitleBox.style.gridTemplateRows = "50% 50%";

                

                //Page Title
                        /*Title Text Replacement*/
                pageTitle.style.textAlign = "center";
                pageTitle.innerHTML = `About<br />${NAMES[j]}`;

                if (document.querySelector("body > main > section:nth-of-type(1) > div:nth-of-type(1)").innerHTML.indexOf("button") == -1){
                let a = document.createElement("button");
                

                a.innerHTML = "Back";

                a.style.display = "flex";
                a.style.justifyContent = "center";
                a.style.alignItems = "center";
                a.style.justifySelf = "center";
                a.style.alignSelf = "center";
                a.style.width = "max-content";
                a.style.height = "max-content";
                a.style.padding = "10%";
                a.style.background = "teal";
                a.style.borderRadius = "10px";
                a.style.transform = "rotate(-0.25turn)";
                a.style.gridArea = "1 / 1 / 2 / 3"
                a.style.textDecoration = "underline";
                a.style.color = "lightblue";
                a.style.fontSize = "1.3rem";
                
                document.querySelector("body > main > section:nth-of-type(1) > div:nth-of-type(1)").appendChild(a);

                document.querySelector("body > main > section:nth-of-type(1) > div:nth-of-type(1) > button").addEventListener('click', resetS1);
                }
                else
                    document.querySelector("body > main > section:nth-of-type(1) > div:nth-of-type(1) > button").style.display = "flex";

                
            }
            else{
                contentBox[j].style.display = "none";
            }
        }
    };
}

//Section 2
{
    let mainContentArea = document.querySelector("body main > section:nth-of-type(2) > section:nth-of-type(1)");
    let contentBox = document.querySelectorAll("body main > section:nth-of-type(2) > section:nth-of-type(1) > div");

    let description = document.querySelectorAll("body main > section:nth-of-type(2) > section:nth-of-type(1) > div p");

    for (let i = 0; i < 3; i++){
        contentBox[i].addEventListener("mouseover", modifyS2);
    }

    function modifyS2(){
        for (let j = 0; j < 3; j++)
        {
            if (contentBox[j] == this)
               this.style.width = "100%";
            else
                contentBox[j].style.width = "80%";
            console.log(contentBox[j]);
        }
        this.addEventListener('mouseleave', resetS2);
    }

    function resetS2(){
        contentBox.forEach(element => {
            element.style.width = "90%"
        });
    }
}