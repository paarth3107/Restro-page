export default function menu(){
    const content= document.querySelector("#content");
    const heading = document.createElement("h1");
    content.textContent="";
    heading.textContent="Menu";
    const item=document.createElement("div");
    const itemName=document.createElement("h2");
    itemName.textContent="Burger";
    const description=document.createElement("p");
    description.textContent="self explanatory";

    item.appendChild(itemName);
    item.appendChild(description);

    content.appendChild(heading);
    content.appendChild(item);

    
}