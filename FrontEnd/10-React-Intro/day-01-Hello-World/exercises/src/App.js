import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3']

function App() {
  return (
    <ul>{compromissos.map((tarefas) => Task(tarefas))}</ul>
  );
}

export default App;
