import React from 'react';
import propTypes from 'prop-types'
import { MdDelete } from 'react-icons/md';
import "./styles.css"

const TodoList = ({ todos, onToggle, onRemove }) =>(

  <ul className="todo-list">
    {
    todos.map((todo) => (
      <li key={todo.id.toString()}>
        <span className={["todo", todo.checked ? "checked" : ""].join(' ')} onClick={()=> onToggle(todo)}>{todo.title}</span>
          <button type="button" className="remove" onClick={() => onRemove(todo)}>
          <MdDelete size={25} />
          </button>
      </li>
        ))
    }
  </ul>
  );
  TodoList.propTypes = {
    todos:propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        title:propTypes.string.isRequired,
        checked:propTypes.bool.isRequired,
      })
    ).isRequired,
    onToggle:propTypes.func.isRequired,
    onRemove:propTypes.func.isRequired,
  };


export default TodoList

