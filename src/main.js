const addForm = document.querySelector('.add-form');
const items = document.querySelector('.items');

function onAdd(e) {
  e.preventDefault();
  const text = e.target[0].value;
  if (!text) return;
  const item = createItem(text);
  items.append(item);
  item.scrollIntoView();
  e.target[0].value = '';
}

function createItem(text) {
  const item = document.createElement('li');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash icon-delete"></i>';
  deleteBtn.addEventListener('click', () => {
    item.remove();
  });

  item.appendChild(name);
  item.appendChild(deleteBtn);

  return item;
}

addForm.addEventListener('submit', onAdd);

const refresh = document.querySelector('.header__refresh');
refresh.addEventListener('click', (e) => {
  items.innerHTML = '';
});
