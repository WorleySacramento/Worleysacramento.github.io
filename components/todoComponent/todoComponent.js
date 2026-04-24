import { React, useEffect, useState } from "react";
import TodoItem from "./todoItem";
import styles from './todo.module.css'
export default function TodoComponent() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/getData");
      if (!response.ok) {
        throw new Error("Falha ao carregar tarefas.");
      }
      const payload = await response.json();
      setTodos(payload || []);
    } catch (requestError) {
      setError("Nao foi possivel carregar as tarefas.");
      setTodos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodoItem = async () => {
    if (!newTodo.trim()) return;

    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/getData/newData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { newTodo: newTodo.trim() } }),
      });

      if (!response.ok) {
        throw new Error("Falha ao adicionar tarefa.");
      }

      setNewTodo("");
      await fetchTodos();
    } catch (requestError) {
      setError("Nao foi possivel adicionar a tarefa.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleTodo = async (id, done) => {
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/getData/updateData", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: { done }, id }),
      });
      if (!response.ok) {
        throw new Error("Falha ao atualizar tarefa.");
      }
      await fetchTodos();
    } catch (requestError) {
      setError("Nao foi possivel atualizar a tarefa.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteTodo = async (id) => {
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/getData/deleteData", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Falha ao remover tarefa.");
      }
      await fetchTodos();
    } catch (requestError) {
      setError("Nao foi possivel remover a tarefa.");
    } finally {
      setSubmitting(false);
    }
  };

    return (
        <div className={styles.maincont}>
            <h1>Todo App</h1>
            <div className={styles.newtodo}>
                <h3>Add new todo</h3>
                <div className={styles.semi}>
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Digite uma tarefa"
                    ></input>
                    <button onClick={addTodoItem} disabled={submitting}>
                        {submitting ? "Salvando..." : "Add Todo"}
                    </button>
                </div>
            </div>
            {loading && <p>Carregando tarefas...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && todos.length === 0 && (
              <p>Nenhuma tarefa cadastrada.</p>
            )}
            <div>
                {
                    todos?.map((todo) => (
                        <TodoItem
                          key={todo.ref["@ref"].id}
                          todo={todo}
                          onToggle={handleToggleTodo}
                          onDelete={handleDeleteTodo}
                          disabled={submitting}
                        />
                    ))
                }
            </div>
        </div>
    )

}

