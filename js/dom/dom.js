//get an elemnent
// byId 
var titleFruitOne = document.getElementById("fruitName1");
titleFruitOne.innerHTML = "Strawberry";

// byTagname 
var buttonPrimary = document.getElementsByTagName('a');
buttonPrimary[0].innerHTML = "Sold Out";

// querySelectorAll 

var stocks = true;

var buttonPrimary = document.querySelectorAll('a.btn-view-details');
console.log(buttonPrimary);

for (var index = 0; index < buttonPrimary.length; index++) {
    if (!stocks) {
        buttonPrimary[index].innerHTML = "Sold Out";
        buttonPrimary[index].classList.add('btn-danger');
        buttonPrimary[index].classList.remove('btn-primary');
        buttonPrimary[index].classList.add('disabled');
    }
}