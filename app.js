const userInput = document.querySelector(".input-box");
const listContainer = document.querySelector("#list-container");

function addTask(){
    if(userInput.value === ""){
        alert("Please enter something.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        listContainer.appendChild(li);
        let close = document.createElement("span");
        close.innerHTML = "\u00d7";
        li.appendChild(close)
    }
    userInput.value = "";
    saveData()
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();