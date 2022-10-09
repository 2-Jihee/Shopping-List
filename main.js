const listForm = document.getElementById('shopping-list-form');
const shoppingInput = listForm.querySelector("input");
const shoppingList = document.getElementById("shopping-list");
const button = document.querySelector('.btn');
const delBtnImg = "<img src='img/trash-can.png' style='width:15px; heigh:15px;'>";

function del(event) {
    const li = event.target.parentElement;
    li.parentElement.remove();
};

function paintList(newList) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newList;
    const delBtn = document.createElement("button");
    delBtn.innerHTML = delBtnImg;
    delBtn.addEventListener("click", del);
    li.appendChild(span);
    li.appendChild(delBtn);
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
};

listForm.addEventListener("submit", handleToDoSubmit);
button.addEventListener("click", handelBtnClick);