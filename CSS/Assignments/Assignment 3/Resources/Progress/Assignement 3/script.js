var IMAGES = Array();
IMAGES[0] = "./Images/1JollyRancher.jpg";
for (let i = 1; i < 8; i++)
    IMAGES[i] = `./Images/bag${i}.jpg`;
for (let i = 8; i < 10; i++)
    IMAGES[i] = `./Images/popsicle${i}.jpg`;


var BUTTONS = Array();
var PRESSED = Array();
for (let i = 1; i <= 7; i++){
    BUTTONS[i-1] = document.querySelector(`button:nth-of-type(${i})`);
    PRESSED[i] = false;
}

var ALTS = Array();
ALTS[0] = "The origial blue"
for (let i = 1; i < 8; i++)
    ALTS[i] = `Bag ${i}`;
for (let i = 8; i < 10; i++)
    ALTS[i] = `The popsicle ${i}`;

var TEXT = Array(
    "Jolly Ranchers offer an unparalleled intensity of flavor that sets them apart. If you crave a bold, unmistakable fruit taste that truly lasts, Jolly Ranchers are your go-to. Their long-lasting hard candies provide a sustained burst of sweetness, perfect for savoring, unlike fleeting chews. Beyond the classic hard candy, their expanding line includes gummies and even freezer pops, all retaining that signature vibrant punch. Whether it's the nostalgic appeal of the original flavors or the adventurous tang of the sours, Jolly Ranchers deliver a powerful, satisfying experience that other candies simply can't match. Choose intensity. Choose Jolly Rancher",

    "These soft and chewy gummies deliver the classic Jolly Rancher fruit flavors in a fun, new texture. Shaped like various fruits, each gummy bursts with the familiar intense sweetness and tanginess of green apple, blue raspberry, cherry, grape, and watermelon. They offer a satisfying chewiness, contrasting with the original hard candy, while maintaining the iconic, vibrant taste that Jolly Rancher is known for. The resealable bag keeps them fresh, making them perfect for sharing (or not!). They come in a 7oz (198g) pack and have 100 calories per 3 pieces",

    "This bulk bag contains the original, individually wrapped Jolly Rancher hard candies, a true classic. Each piece offers a long-lasting, intensely flavored experience, slowly dissolving to release waves of bold fruit taste. The assortment features the iconic flavors: blue raspberry, green apple, cherry, grape, and watermelon. These hard candies are perfect for sucking on, providing a sustained burst of sweetness that's both refreshing and satisfying. The 80 oz (5LB) bag offers 360 peices. Perfect for parties, or refilling the candy jar, and have 70 calories per 3 peices",

    "These freezer pops bring the classic Jolly Rancher flavors to a refreshing, icy treat. Each pop delivers a blast of the familiar fruit flavors – grape, green apple, watermelon, and blue raspberry – in a frozen format. They're perfect for cooling down on a hot day, offering a fun, vibrant, and thirst-quenching experience. The individually wrapped pops are easy to enjoy, providing a convenient and flavorful way to beat the heat. They are 10-1oz(28.3g) pops, for a toal of 10oz(283.5g)",

    "These sugar-free hard candies offer the classic Jolly Rancher taste without the sugar. They're a great option for those watching their sugar intake, delivering the same bold fruit flavors – watermelon, grape, apple, and raspberry – in a guilt-free format. Each piece provides a long-lasting, satisfying sweetness, mirroring the original hard candy experience but without the added sugar or aspartame. The individual wrapping ensures freshness and portability, making them a convenient treat for any time. They come in a 3.6oz (102g) package and are 35 calories per serving",

    "This smaller bag contains the classic, individually wrapped Jolly Rancher hard candies. The familiar five original long-lasting flavors are all present: blue raspberry, green apple, cherry, grape, and watermelon. These hard, smooth sucking candies deliver the vibrant, intense sweetness the brand is famous for. Ideal for on-the-go enjoyment or a small treat, offering a convenient size and 45 calories per serving",

    "This frozen treat, created in partnership with Popsicle, features a twisted design and combines classic Jolly Rancher flavors. The layers of green apple, blue raspberry, and grape create a visually appealing and flavorful experience. Each lick offers a blend of sweet and tart, capturing the essence of Jolly Rancher in a refreshing, frozen format. It's a fun and colorful way to enjoy the iconic candy flavors on a hot day, coming in at 70 calories per pop, for 2.71 FL OZ (80ml)",

    "This bag of Jolly Rancher hard candies offers a tropical twist on the classic flavors. Featuring golden pineapple, lime, mango, and fruit punch, each individually wrapped piece delivers a burst of exotic, fruity sweetness. These hard candies provide the same long-lasting, intense flavor experience as the originals, but with a vibrant, island-inspired flair. Perfect for those seeking a different, yet still distinctly Jolly Rancher, taste adventure, and 198g bags",
    
    "This bag is dedicated entirely to the beloved blue raspberry flavor of Jolly Rancher hard candy. Each individually wrapped piece offers the intensely sweet and slightly tart taste that blue raspberry fans crave. The smooth, hard candy provides a long-lasting flavor experience, making it a perfect choice for those who have a particular fondness for this iconic Jolly Rancher flavor. The 7oz (198g) bag has 70 calories per serving"
);


var TITLES = Array(
    "Why Jolly Ranchers",
    "Jolly Rancher Original Gummies",
    "Jolly Rancher Hard Candy (Large Bag)",
    "Jolly Rancher Freezer Pops",
    "Jolly Rancher Zero Sugar Hard Candy",
    "Jolly Rancher Original Hard Candy (Small Bag)",
    "Jolly Rancher (Popsicle) Frozen Confection Pop",
    "Jolly Rancher Hard Candy Tropical",
    "Jolly Rancher Gummies Sour Awesome Reds",
    "Jolly Rancher Hard Candy All Blue Raspberry"
);

function modify(bool, index){
    let p = document.querySelector("body main section:nth-of-type(2) p").textContent;
    let h3 = document.querySelector("body main section:nth-of-type(1) h3").textContent;
    let img = document.querySelector("body > div img").src;

    if (arguments[0]){
        p = TEXT[index + 1];
        img = IMAGES[index + 1];
        h3 = TITLES[index + 1];
    }
    else{
        p = TEXT[0];
        img = IMAGES[0];
        h3 = TITLES[0];
    }
}

for (let i = 0; i < 7; i++){
    switch (PRESSED[i]){
        case true:
            BUTTONS[i].addEventListener('click', function(){
                modify(true,index)
                PRESSED[i] = !PRESSED[i];
            });
        case false:
            BUTTONS[i].addEventListener('click', function() {
                modify(false, _)

            });
            
    }
    BUTTONS[i].addEventListener('click', function(){
        modify(true, i);
        PRESSED[i] = true;
    });
    if (PRESSED[i] == false)
    {
        BUTTONS[i].addEventListener('click', function(){
            modify(false, i);
            PRESSED[i] = false;
        });
        BUTTONS[i].addEventListener('mouseover',function(){
            modify(true, i);
        });
        BUTTONS[i].addEventListener('mouseout', function(){
            modify(false, i);
        });
    }
}


