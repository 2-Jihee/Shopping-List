const listForm = document.getElementById('shopping-list-form');
const shoppingInput = listForm.querySelector("input");
const shoppingList = document.getElementById("shopping-list");

function paintList(newList) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newList;
    shoppingList.appendChild(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newList = shoppingInput.value;
    shoppingInput.value = "";
    paintList(newList);
};

listForm.addEventListener("submit", handleToDoSubmit);
