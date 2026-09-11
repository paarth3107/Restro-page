export default function about(){
    const content=document.querySelector("#content");
    const heading=document.createElement("h1");
    content.textContent="";
    heading.textContent="About page";
    content.appendChild(heading);
}