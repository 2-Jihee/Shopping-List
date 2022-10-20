const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');


function onAdd() {
    // 1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제버튼)
    const item = createItem(text);
    // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);
    // 4. 인풋을 초기화 한다.
    input.value = '';
    input.focus();   //input 작성 후 다시 커서가 input으로 돌아감
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deletBtn = document.createElement('button');
    deletBtn.setAttribute('class', 'item__delete');
    deletBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deletBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    const itemDivider =  document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deletBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}


addBtn.addEventListener('click', () => {
    onAdd();
})
input.addEventListener('keypress', (event) => {
    onAdd();
});