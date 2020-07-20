import { v4 as uuid } from 'uuid';
import ls from 'local-storage';

const createTodo = todo => {
  const newTodo = { ...todo, id: uuid() };
  const todos = ls('todos') || [];
  const newTodos = [...todos, newTodo];

  ls('todos', newTodos);

  return newTodo;
};

const deleteTodo = id => {
  const todos = ls('todos') || [];
  const newTodos = todos.filter(t => t.id !== id);

  ls('todos', newTodos);

  return id;
};

const fetchTodos = () => (ls('todos') || []);

const updateTodo = id => {
  const todos = ls('todos') || [];
  const newTodos = todos.map(t => (t.id === id ? { ...t, done: !t.done } : t));

  ls('todos', newTodos);

  return id;
};

export default function fakeFetch(request = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (request.type) {
        case 'GET': {
          const res = fetchTodos();

          resolve(res);
          break;
        }
        case 'PUT': {
          const res = updateTodo(request.body);

          resolve(res);
          break;
        }
        case 'POST': {
          const res = createTodo(request.body);

          resolve(res);
          break;
        }
        case 'DELETE': {
          const res = deleteTodo(request.body);

          resolve(res);
          break;
        }
        default: {
          reject(new Error('Bad Request'));
        }
      }
    }, 500);
  });
}
