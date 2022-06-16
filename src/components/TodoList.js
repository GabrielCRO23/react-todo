import React from 'react';
import Todo from './Todo'

function TodoList({todos, setTodos}){
    return (
        <div className="todo-container">
      <ul className="todo-list"></ul>
        {todos.map(todo => (
            <Todo 
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            todo={todo} 
            key={todo.id}></Todo>
        ))}
        </div>
    )
}

export default TodoList