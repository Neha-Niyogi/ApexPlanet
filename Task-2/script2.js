let todos = JSON.parse(localStorage.getItem('todos')) || [];
  let currentFilter = 'all';
  let nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;

  function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.getElementById('nav-' + page).classList.add('active');
    if (page === 'profile') updateProfileStats();
  }

  function updateProfileStats() {
    document.getElementById('stat-total').textContent = todos.length;
    document.getElementById('stat-done').textContent = todos.filter(t => t.done).length;
  }

  function handleKey(e) { if (e.key === 'Enter') addTodo(); }

  function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (!text) return;
    todos.push({ id: nextId++, text, done: false });
    input.value = '';
    save();
    renderTodos();
  }

  function toggleTodo(id) {
    const t = todos.find(t => t.id === id);
    if (t) t.done = !t.done;
    save();
    renderTodos();
  }

  function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    save();
    renderTodos();
  }

  function clearDone() {
    todos = todos.filter(t => !t.done);
    save();
    renderTodos();
  }

  function setFilter(f, btn) {
    currentFilter = f;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTodos();
  }

  function renderTodos() {
    const list  = document.getElementById('todo-list');
    const empty = document.getElementById('todo-empty');
    const count = document.getElementById('todo-count');
    const visible = todos.filter(t =>
      currentFilter === 'all' ? true :
      currentFilter === 'active' ? !t.done : t.done
    );
    list.innerHTML = '';
    visible.forEach(t => {
      const li = document.createElement('li');
      li.className = 'todo-item' + (t.done ? ' done' : '');
      li.innerHTML = `
        <button class="todo-check" onclick="toggleTodo(${t.id})"></button>
        <span class="todo-text">${t.text}</span>
        <button class="todo-del" onclick="deleteTodo(${t.id})">✕</button>
      `;
      list.appendChild(li);
    });
    const remaining = todos.filter(t => !t.done).length;
    count.textContent = `${remaining} task${remaining !== 1 ? 's' : ''} remaining`;
    empty.classList.toggle('show', visible.length === 0);
  }

  function save() { localStorage.setItem('todos', JSON.stringify(todos)); }

  renderTodos();

  function toggleDarkMode(btn) {
  btn.classList.toggle('on');

  document.body.classList.toggle('light');

  // save preference
  if (document.body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

// load saved theme
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  document.querySelectorAll('.toggle')[1]?.classList.remove('on');
}