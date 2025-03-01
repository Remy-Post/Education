let USERNAME = Array("","","","","");
let TIME = Array(-1, -1, -1, -1, -1);
let FOLLOWERS = Array(-1, -1, -1, -1, -1);

for (let formater = 0; formater < 5; formater++){
    USERNAME[formater] = `name${formater}`;
    TIME[formater] = formater;
    FOLLOWERS[formater] = formater * 1000;
}


let buttons = document.querySelectorAll("body footer > div:nth-of-type(2) > button");
let boxes = document.querySelectorAll("body footer > div:nth-of-type(2) > div > div > div");
let title = document.querySelectorAll("body footer > div:nth-of-type(2) > div > div > div > h6");
let content = document.querySelectorAll("body footer > div:nth-of-type(2) > div > div > div > p");
let sectionTitle = document.querySelector("body footer > div:nth-of-type(2) > div > h5");
let index = 3;

let nav = document.querySelector('nav');
let img = document.querySelectorAll("body > header > nav > a > img");

img.forEach(image => {
    image.addEventListener("mouseover", function(){
        this.style.width = "75%";
        this.style.height = "75%";
    });
    image.addEventListener("mouseout", function(){
        this.style.width = "auto";
        this.style.height = "50%";
    })
});


for (let button = 0; button < 2; button++){
    buttons[button].addEventListener("click",function(){
        //Event
        switch (button){
            case 0: 
            {
                index > 0 ? --index :index = 4

                for (let i = 0; i < 2 && i < 2; i++)
                {
                    
                    content[i].innerHTML = String(TIME[index]);
                    sectionTitle.innerHTML = `User: ${USERNAME[index]}`;
                }
                break;
            }
            case 1:
            {
                index < 4 ? ++index: index = 0

                for (let i = 0; i < 2 && i < 2; i++)
                {
                    content[i].innerHTML = TIME[index];
                    sectionTitle.innerHTML = `User: ${USERNAME[index]}`;
                }
                break;
            }

            default:{
                alert("There is an Error");
                break
            }
        }
    })
}
