import React from 'react';

function Form({setTextInput, textInput, todos, setTodos}){
    function textChangeHandler(e){
        console.log(e.target.value)
        setTextInput(e.target.value)
    }
    function submitTodoHandler(e){
        e.preventDefault()
        setTodos([
            ...todos, {text: textInput, completed: false, id: Math.random() * 1000}
        ])
        setTextInput('')
    }
    
    return (
        <form>
      <input value={textInput} onChange={textChangeHandler}type="text" className="todo-input" />
      <button onClick={submitTodoHandler}className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form