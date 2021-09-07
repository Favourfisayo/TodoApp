

const button = document.querySelector("#add--task");
var number = 0;
button.addEventListener("click", () => {
    var wrapper = document.querySelector(".app--wrapper")
    var task = document.querySelector("#task").value;
     document.querySelector("#task").value = "";
    
    
    const divElement = document.createElement("div");
    var buttonElem = document.createElement("button");
    const taskNameElem = document.createElement("h3");
    const taskNumber = document.createElement("p");

    number += 1;
    taskNumber.innerHTML = number
    taskNameElem.innerHTML = task
    buttonElem.innerHTML = "Delete"

    divElement.appendChild(taskNumber)
    divElement.appendChild(taskNameElem)
    divElement.appendChild(buttonElem)
    wrapper.appendChild(divElement)


    buttonElem.classList.add("btn")
    taskNameElem.classList.add("task--name");
    divElement.classList.add("parentDiv");


    buttonElem.addEventListener("click", () => {
        number = 0
        wrapper.removeChild(divElement)
    })
    
  
})


