// grab elements
const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const ul = document.getElementsByTagName("ul")[0];
// private helper
const addItem = () => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(input.value));
    p.classList.add("d-inline-block", "m-8");
    const delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete"));
    const li = document.createElement("li");
    li.appendChild(p);
    li.appendChild(delButton);
    ul.appendChild(li);
    input.value = "";
}
// event handlers
const ulClickHandler = () => {
    const element = event.target;
    if (element.tagName === "P") element.classList.toggle("done");
    else if (element.tagName === "BUTTON") element.parentElement.remove();
}
const buttonSubmit = () => {
    if (input.value.length !== 0) addItem();
}
const inputEnter = (event) => {
    if (event.keyCode === 13 && input.value.length !== 0) addItem();
}
// events
button.addEventListener("click", buttonSubmit);
input.addEventListener("keypress", inputEnter);
ul.addEventListener("click", ulClickHandler);