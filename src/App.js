import { useState } from 'react'
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList';





function App() {
  const [textInput, setTextInput] = useState("")
  
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
      <h1>Hello React</h1>
      </header>
      <Form textInput={textInput} todos={todos} setTodos={setTodos}setTextInput={setTextInput}> 

      </Form>
      <TodoList setTodos={setTodos}todos={todos}></TodoList>
    </div>
  );
}

export default App;
