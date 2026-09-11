export default function homepage(){
    const content=document.querySelector("#content");
    const heading=document.createElement("h1");
    heading.textContent="Homepage";
    const text=document.createElement("h2");
    text.textContent="Home page";
    content.appendChild(heading);
    content.appendChild(text);

}