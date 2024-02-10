const myColor = () => {
let container = document.getElementsByClassName("container")[0];
let headOne = document.querySelector("h1");
let headTwo = document.querySelector("h2");
let colorChanger = document.getElementById("color-changer");


// alert(colorChanger.value)
    if (colorChanger.value === "dark") {
        container.style.backgroundColor = "#111b21";
        headTwo.style.color = "rgb(238, 71, 71)";
        headOne.style.color = "darkslategray";
    } else if (colorChanger.value === "dark+") {
        container.style.backgroundColor = "#0D1721";
        headTwo.style.color = "rgb(238, 71, 71)";
        headOne.style.color = "white";
    } else if (colorChanger.value === "light") {
        container.style.backgroundColor = "white";
        headTwo.style.color = "brown";
        headOne.style.color = "darkslategray";
    } else if (colorChanger.value === "grey") {
        container.style.backgroundColor = "rgb(36, 35, 35)";
        headTwo.style.color = "brown";
        headOne.style.color = "white";
    } else {
        container.style.backgroundColor = "rgb(48, 2, 90)";
        headTwo.style.color = "brown";
        headOne.style.color = "white";      
    }
};