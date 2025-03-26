let sections = [];
let User = [];



class user{
    constructor(win = window){
        this.win = window;
        this.scroll = Scroll;
        this.currentSection;
    }
}

class files{
    constructor(Name, Class){
        this.name = Name;
        this.class = Class;
    }

    removeClasses(section){
        // https://stackoverflow.com/questions/5085567/what-is-the-hasclass-function-with-plain-javascript
        if (document.querySelector(section == "header" ? document.querySelector("header").classList.contains('pre') : 1 <= Number(section) && Number(section) <= 8 ? document.querySelector(`main > section:nth-of-type(${section})`).classList.contains('pre') : document.querySelector(`footer`).classList.contains('pre'))){
            if (section == "header"){
                document.querySelector(`header`).removeClass(`pre`);}
            else if(section != "footer"){
                document.querySelector(`main >section:nth-of-type(${section})`).removeClass(`pre`);}
            else{
                document.querySelector(`footer`).removeClass(`pre`);}
        }
    }

    action(scroll){
        if (scroll < 100){

        }
        else if (scroll < 200){
            if (document.querySelector("header").classList.contains("pre")){
                
                this.removeClasses("header");
            }
        }
        else if (scroll < 300){

        }
        else if (scroll < 400){

        }
        else if (scroll < 500){

        }
        else if (scroll < 600){

        }
        else if (scroll < 700){

        }
        else if (scroll < 800){

        }
        else{

        }
    }


}

$(window).on("scroll", function(){
    User.scroll = this.scrollTop();
    for (let i = 100; i <= 900; i += 100){
        User.currentSection = User.currentSection < 100 ? "header" : User.currentSection < 800 ? Text(i/100) : "footer";
        sections.push()
    }
    
});

for (let i = 1; i <= (end = 8); i++){
    User.push(new user());
}


