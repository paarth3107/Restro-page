import homepage from "./homepage.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";
homepage();
const content=document.querySelector("#content");
const homeButton= document.querySelector("#home");
const menuButton= document.querySelector("#menu");
const aboutButton= document.querySelector("#about");

homeButton.addEventListener("click", () => {
    content.textContent="";
    homepage();
});

menuButton.addEventListener("click", () =>{
    content.textContent="";
    menu();
});
aboutButton.addEventListener("click", () =>{
    content.textContent="";
    about();
});