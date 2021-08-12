// document.getElementsByTagName("li");
// document.getElementsByClassName("second")[0];   // array of such elements
// document.getElementById("first");

// document.querySelector("li");
// document.querySelectorAll("li", "h1");  // selects all those elements

// document.querySelector("li").getAttribute("random");
// document.querySelector("li").setAttribute("random", "234");

// Changing styles
const btn = document.querySelector("button");
const text = document.getElementById("txt1");
const x = document.createElement("p").innerText = "Please Enter Item";

function createItem(){
    const listItem = document.createElement("li");
    listItem.innerText = text.value;// or listItem.appendChild(document.createTextNode(text.value))
    document.getElementsByTagName("ul")[0].append(listItem);
    text.value = "";
}
function addListAfterClick(){
    if(text.value.length > 0){
        createItem();
    }
    else if(text.value.length == 0){
        alert("Please Enter Item!");
    }
}
function addListAfterKeypress(event){
    if(text.value.length > 0 && event.keyCode === 13){
        document.body.toggle(x);
        createItem();
    }
    else if(text.value.length == 0 && event.keyCode===13){
        alert("Please Enter Item!");
    }
}

btn.addEventListener("click" , addListAfterClick);
text.addEventListener("keypress", addListAfterKeypress);


