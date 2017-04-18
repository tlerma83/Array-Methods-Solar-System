"use strict";

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var el = document.getElementById("planets");

function planetOutput(element){
    el.innerHTML += element + " ";
};

planets.forEach(planetOutput);


function capital (planets) {
    var stuff = planets.charAt(0).toUpperCase() + planets.substr(1);
    return stuff;
}
var mapArray = planets.map(capital);
mapArray.forEach(planetOutput);


function filterIt (element, index, array) {
    if (element.includes("e")) {
        return element;
    }
}
var planetsWithE = planets.filter(filterIt);
el.innerHTML += `<p>${planetsWithE}</p>`;



var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var something = words.reduce(function(current, newArray) {
    return `${current} ${newArray}`
});

el.innerHTML+= something;






