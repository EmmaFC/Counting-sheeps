/* Counting sheeps & wolfs */

/* 

let countSheepImg = document.createElement('img')
countSheepImg.src = "./assets/img/sheep-count.png";
document.getElementById('surprise').appendChild(countSheepImg);

let countWolfImg = document.createElement('img')
countWolfImg.src = "./assets/img/wolf-count.png";
document.getElementById('surprise').appendChild(countWolfImg); */


let btnAddSheep = document.getElementById('btn_add_sheep');
let btnAddWolf = document.getElementById('btn_add_wolf');
let btnCountSheeps = document.getElementById('btn_count_sheeps');
let btnCountWolfs = document.getElementById('btn_count_wolfs');
let btnCountAnimals = document.getElementById('btn_count_animals');
const animals = [];

btnAddSheep.addEventListener('click', () =>
{
    animals.push(true);
    console.log(animals); 
    document.getElementById("message_shown").innerHTML = "...";
    let addSheepImg = document.createElement('img')
    addSheepImg.src = "./assets/img/sheep-add.png";
    addSheepImg.style.width = "10%";
    document.getElementById('animals-display').appendChild(addSheepImg);
});

btnAddWolf.addEventListener('click', () =>
{
    animals.push(false);
    console.log(animals);
    document.getElementById("message_shown").innerHTML = "..."; 
    let addWolfImg = document.createElement('img')
    addWolfImg.src = "./assets/img/wolf-add.png";
    addWolfImg.style.width = "10%";
    document.getElementById('animals-display').appendChild(addWolfImg);

});

 btnCountSheeps.addEventListener('click', () =>
 {
    let numberOfSheeps = animals.filter(item => item === true).length;

    if(animals.length >= 1 && numberOfSheeps == 1)
    {
        console.log("There is " + numberOfSheeps + " sheep");
        document.getElementById("message_shown").innerHTML = "There is " + numberOfSheeps + " sheep";
        return;
    }
    if (animals.length >= 1)
    {
        numberOfSheeps = animals.filter(item => item === true).length;
        console.log("There are " + numberOfSheeps + " sheeps");
        document.getElementById("message_shown").innerHTML = "There are " + numberOfSheeps + " sheeps";
        return;
    }
        console.log("Please, introduce some animals!")
        document.getElementById("message_shown").innerHTML =  "Please, introduce some animals!";
 });
 
 btnCountWolfs.addEventListener('click', () =>
 {
    let numberOfWolfs = animals.filter(item => item === false).length;

    if(animals.length >= 1 && numberOfWolfs == 1)
    {
        console.log("There is " + numberOfWolfs + " wolf");
        document.getElementById("message_shown").innerHTML = "There is " + numberOfWolfs + " wolf";        
        return;
    }
    
    if(animals.length >= 1)
    {
        numberOfSheeps = animals.filter(item => item === true).length;
        let AlsoNumberOfWolfs = animals.length - numberOfSheeps
        console.log("There are " + AlsoNumberOfWolfs + " wolfs (counting wolfs in another way)");
        document.getElementById("message_shown").innerHTML = "There are " + AlsoNumberOfWolfs + " wolfs";
        return;
    }
        console.log("Please, introduce some animals!")
        document.getElementById("message_shown").innerHTML = "Please, introduce some animals!";
 }); 

 btnCountAnimals.addEventListener("click", () =>
 {
    if(animals.length >= 1)
    {
        let numberOfWolfs = animals.filter(item => item === false).length;
        let numberOfSheeps = animals.filter(item => item === true).length;
        console.log("There are " + numberOfSheeps + " sheeps and " + numberOfWolfs + " wolfs");
        document.getElementById("message_shown").innerHTML = "There are " + numberOfSheeps + " sheeps and " + numberOfWolfs + " wolfs";
        return;
    }
        console.log("Please, introduce some animals!")
        document.getElementById("message_shown").innerHTML = "Please, introduce some animals!";
 }); 
    
/* // Practicando con bucles 
// Printing each element value that match the condition 
let count = 0

for (let i = 0; i <= animals.length; i++) {
    if (animals[i] === true){
        count = count + 1
        let countingSheeps = "oveja " + count;
        console.log(countingSheeps);
    }
} 

let num = 0;

animals.forEach(( animal) => {
    num = num +1
    if (animal == true){
      
        let countingSheeps2= "oveja " + num;
        console.log(countingSheeps2)
    }
});

x = 0

while (animals.length <= x){
    x = x+1
    let countingSheeps3= "oveja " + x;
    console.log(countingSheeps3)
} */










