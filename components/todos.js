const Todos = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/';
  const rta = await fetch(url).then(response => response.json());
  const render = rta.map(item => `<li>${item.title}</li>`).join('');
  return `
    <div class="todos-box">
      <ul>
        ${render}
      </ul>
    </div>`;
};
