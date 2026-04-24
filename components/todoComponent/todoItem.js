import React from "react";
import styles from "./todo.module.css";

function TodoItem({ todo, onToggle, onDelete, disabled }) {
  const todoId = todo.ref["@ref"].id;

  return (
    <div>
      <span className={styles.eachtodo}>
        <p className={styles.text}>{todo.data.task}</p>
        <div>
          <input
            type="checkbox"
            className={styles.toggle}
            checked={todo.data.done}
            onChange={() => onToggle(todoId, !todo.data.done)}
            disabled={disabled}
          />
          <button onClick={() => onDelete(todoId)} disabled={disabled}>Delete</button>
        </div>
      </span>
    </div>
  );
}
export default TodoItem;