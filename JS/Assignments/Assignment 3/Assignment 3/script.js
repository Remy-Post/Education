class Conponets{
    constructor(){
        this.b1 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(1) button");
        this.b2 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(2) button");
        this.b3 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(3) button");
        this.b4 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(4) button");
        this.b5 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(5) button");

        this.t1 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(1) p");
        this.t2 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(2) p");
        this.t3 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(3) p");
        this.t4 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(4) p");
        this.t5 = document.querySelector("main section:nth-of-type(4) div:nth-of-type(5) p");

        this.ta1 = document.querySelector("main section:nth-of-type(5) tr:nth-of-type(1) td")
        this.ta2 = document.querySelector("main section:nth-of-type(5) tr:nth-of-type(2) td")
        this.ta3 = document.querySelector("main section:nth-of-type(5) tr:nth-of-type(3) td")
        this.ta4 = document.querySelector("main section:nth-of-type(5) tr:nth-of-type(4) td")
        this.ta5 = document.querySelector("main section:nth-of-type(5) tr:nth-of-type(5) td")
    }

    buttons(){
        return Array(this.b1, this.b2, this.b3, this.b4, this.b5);
    }

    texts(){
        return Array(this.t1, this.t2, this.t3, this.t4, this.t5);
    }

    table(){
        return Array(this.ta1, this.ta2, this.ta3, this.ta4, this.ta5)
    }
}

class Pizza{
    constructor(){
        this.base = "Cut";
        this.sauce = "Marinara";
        this.topping = Array("Cheese", null, null);
        }
    }

class Item{
    constructor(Name, Description, Warnings, Price){
        this.name = Name;
        this.description = Description;
        this.warnings = Warnings;
        this.price = Price;
    }
}

class Menu extends Conponets{
    constructor(){
        super();
        this.pizza = new Pizza();
        this.BASE = [new Item("Cut", "A pizza cut evenly aloowing multiple slices of pizza", null , 0),
            new Item("Uncut", "A pizza which is not seperated into peices",
            new Item("Stuffed Crust", "A pizza that has cheese inside the crust", "only available in cut pizza", 0)),
            new Item("Deep Dish", "This is our classic deep dish pizza", "only available in uncut pizzas", 4)];
        /*
            Type -> Name:String - Description:String - Warnings:List[String]||String||Null - Price:Float
        */
        
        this.SAUCE = Array(new Item("Marinara", "This is the basic tomato sauce", null, 0),    
            new Item("Alfredo", "A creamy white sauce from Butter and cheeses", "Not Offered with Deep Dish pizzas", 3), 
            new Item("Barbecue", "A interesting tasting", "Most dislike this", 3), new Item("Buffalo", "A spicy twist", null, 3), 
            new Item("Chocolate", "The sweetest pizza ever", "HIGH SUGAR", 5));
        
        this.TOPPINGS = Array(new Item("Cheese", "Mozzarella foundation", null, 0),
            new Item("Pepperoni", "Classic spicy rounds", null, 1),
            new Item("Italian Sausage", "Savory seasoned crumbles", null, 1),
            new Item("Mushrooms", "Sliced white mushrooms", null, 1),
            new Item("Black Olives", "Briny sliced olives", null, 1),
            new Item("Green Peppers", "Fresh diced peppers", null, 1),
            new Item("Onions", "Caramelized onions", null, 1),
            new Item("Bacon", "Crispy smoked bacon", null, 1),
            new Item("Pineapple", "Sweet tropical chunks", null, 1),
            new Item("Jalapeños", "Spicy pepper slices", null, 1));
    }

    switch (button){
        function plus1(list, index){
            index += 1;
            return (index + 1) % list.length;
        }

        switch (button){
            case this.b1: {
                const currentIndex = this.BASE.findIndex(item => item.name === this.t1.textContent);
                const nextIndex = plus1(this.BASE, currentIndex);
                this.t1.textContent = this.BASE[nextIndex].name;
                break;
            }
        
            case this.b2: {
                const currentIndex = this.SAUCE.findIndex(item => item.name === this.t2.textContent);
                const nextIndex = plus1(this.SAUCE, currentIndex);
                this.t2.textContent = this.SAUCE[nextIndex].name;
                break;
            }
        
            case this.b3: {
                const currentIndex = this.t3.textContent === "None" ? -1 : 
                    this.TOPPINGS.findIndex(item => item.name === this.t3.textContent);
                const nextIndex = (currentIndex + 1) % (this.TOPPINGS.length + 1);
                this.t3.textContent = nextIndex < this.TOPPINGS.length ? 
                    this.TOPPINGS[nextIndex].name : "None";
                break;
            }
        
            case this.b4: {
                const currentIndex = this.t4.textContent === "None" ? -1 : 
                    this.TOPPINGS.findIndex(item => item.name === this.t4.textContent);
                const nextIndex = (currentIndex + 1) % (this.TOPPINGS.length + 1);
                this.t4.textContent = nextIndex < this.TOPPINGS.length ? 
                    this.TOPPINGS[nextIndex].name : "None";
                break;
            }
        
            case this.b5: {
                const currentIndex = this.t5.textContent === "None" ? -1 : 
                    this.TOPPINGS.findIndex(item => item.name === this.t5.textContent);
                const nextIndex = (currentIndex + 1) % (this.TOPPINGS.length + 1);
                this.t5.textContent = nextIndex < this.TOPPINGS.length ? 
                    this.TOPPINGS[nextIndex].name : "None";
                break;
            }
        
            default:
                alert("There is a big problem");
                break;
        }

        this.update();
        this.change();
    }

    update(){
        function valid(text){
            if (text == "None")
                return null
            return text
        }
        this.pizza.base = this.t1.textContent;
        this.pizza.sauce = this.t2.textContent;
        this.pizza.topping[0] = valid(this.t3.textContent);
        this.pizza.topping[1] = valid(this.t4.textContent);
        this.pizza.topping[2] = valid(this.t5.textContent);
    }

    change(){
        this.ta1.textContent = this.pizza.base;
        this.ta2.textContent = this.pizza.sauce;
        this.ta3.textContent = this.pizza.topping[0];
        this.ta4.textContent = this.pizza.topping[1];
        this.ta5.textContent = this.pizza.topping[2];
    }

    

}

let menu = new Menu();

menu.buttons().forEach(element => {
    element.addEventListener("click", function() {
        menu.switch(this);
    });
});


