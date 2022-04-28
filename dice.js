var first = Math.random() * 6 + 1;
var second = Math.random() * 6 + 1;

first = Math.floor(first);
second = Math.floor(second);


var randomImage1 = "images/dice" + first + ".png"
var randomImage2 = "images/dice" + second + ".png"


if (first > second) {
    document.querySelector("h1.upper").textContent = "Player 1 wins"

}
else if(second == first) {
    document.querySelector("h1.upper").textContent = "Its a draw"

}
else{
    document.querySelector("h1.upper").textContent = "Player 2 wins"
}


document.querySelector("img.first").setAttribute("src", randomImage1)

document.querySelector("img.second").setAttribute("src", randomImage2)



// if (first == 2) {
   
// }

// if (first == 3) {
//     document.querySelector("img.first").setAttribute("src", "images/dice3.png")
// }

// if (first == 4) {
//     document.querySelector("img.first").setAttribute("src", "images/dice4.png")
// }

// if (first == 5) {
//     document.querySelector("img.first").setAttribute("src", "images/dice5.png")
// }
// if (first == 6) {
//     document.querySelector("img.first").setAttribute("src", "images/dice6.png")
// }



// if (second == 2) {
//     document.querySelector("img.second").setAttribute("src", "images/dice2.png")
// }

// if (second == 3) {
//     document.querySelector("img.second").setAttribute("src", "images/dice3.png")
// }

// if (second == 4) {
//     document.querySelector("img.second").setAttribute("src", "images/dice4.png")
// }

// if (second == 5) {
//     document.querySelector("img.second").setAttribute("src", "images/dice5.png")
// }
// if (second == 6) {
//     document.querySelector("img.second").setAttribute("src", "images/dice6.png")
// }