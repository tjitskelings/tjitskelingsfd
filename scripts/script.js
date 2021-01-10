// JavaScript Document

var hamburgerknop = document.getElementById("hamburgerknop");

function showMenu() {
    let hetMenu = document.querySelector("#menu > ul");

    hetMenu.classList.toggle("toonmenu");

    console.log(hetMenu);
}

hamburgerknop.addEventListener("click", showMenu);
