const listForm = document.getElementById('shopping-list-form');
const shoppingInput = listForm.querySelector("input");
const shoppingList = document.getElementById("shopping-list");
const button = document.querySelector('.btn');
const delBtnImg = "<img src='img/trash-can.png' style='width:20px; heigh:20px;'>";

function paintList(newList) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newList;
    const button = document.createElement("button");
    button.innerHTML = delBtnImg;
    li.appendChild(span);
    li.appendChild(button);
    shoppingList.appendChild(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newList = shoppingInput.value;
    shoppingInput.value = "";
    paintList(newList);
};

function handelBtnClick(event) {
    const newList = shoppingInput.value;
    shoppingInput.value = "";
    paintList(newList);
}

listForm.addEventListener("submit", handleToDoSubmit);
button.addEventListener("click", handelBtnClick);