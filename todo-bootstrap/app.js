const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

const genereteTemplate = (add) => {
    const html = `
    <li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					<span>${add}</span>
					<i class="far fa-trash-alt delete"></i>
				</li>
    `;
    list.innerHTML += html;
}


addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const add = addForm.add.value.trim();
    if(add.length) {
      genereteTemplate(add);
      addForm.reset();
    }
});


// delete todos

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
})

// filter todos

const filterTodos = (term) => {
  Array.from(list.children)
  .filter(todo => !todo.textContent.toLocaleLowerCase().includes(term))
  .forEach(todo => todo.classList.add('filtered'));
  Array.from(list.children)
  .filter(todo => todo.textContent.toLocaleLowerCase().includes(term))
  .forEach(todo => todo.classList.remove('filtered'));

}

// search

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
})
