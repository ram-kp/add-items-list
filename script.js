// document.getElementsByTagName("li");
// document.getElementsByClassName("second")[0];   // array of such elements
// document.getElementById("first");

// document.querySelector("li");
// document.querySelectorAll("li", "h1");  // selects all those elements

// document.querySelector("li").getAttribute("random");
// document.querySelector("li").setAttribute("random", "234");

// Changing styles
const btn = document.querySelector("button");
btn.addEventListener("click" , () => {
    const text = document.getElementById("txt1");
    const listItem = document.createElement("li");
    listItem.innerText = text.value;// or listItem.appendChild(document.createTextNode(text.value))
    document.getElementsByTagName("ul")[0].append(listItem);
    text.value = "";
})


