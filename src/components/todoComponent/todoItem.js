import { React, useState } from "react";
import styles from "@/styles/Home.module.css";
import deleteData from "../../pages/api/getData/deleteData"

function TodoItem({todo}) {
    const [isChecked, setIsChecked] = useState(false);
    const [done, isDone] = useState(true);
    const [aDelete, isDeleted] = useState("");
    const [inputData, setInputData] = useState({});
    let d = "";
  
    const handlecheck = async () => {
        isDone(!todo.data.done);
        let c = !todo.data.done;
        isDeleted(todo.ref["@ref"].id);
        d = todo.ref["@ref"].id;
        let g = {
          ...inputData,
          done: c,
        };
        await fetch("../../pages/api/getData/updateData", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
      
          body: JSON.stringify({ data: g, id: d }),
        })
          .then(() => deleteData())
          .catch((e) => console.log(e));
      };
      
      const handleDelete = () => {
        d = todo.ref["@ref"].id;
        isDeleted(todo.ref["@ref"].id);
        deleteItem();
      };
      
      async function deleteItem() {
        await fetch("../../pages/api/getData/deleteData", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
      
          body: JSON.stringify({ id: d }),
        })
          .then(() => deleteData())
          .catch((e) => console.log(e));
      }
 


  return (
    <div>
      <span className={styles.eachtodo}>
        <p className={styles.text}>{todo.data.task}</p>
        <div>
        <input
            type="checkbox"
            className={styles.toggle}
            defaultChecked={todo.data.done}
            onChange={handlecheck}
            onClick={() => setIsChecked(!isChecked)}
          />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </span>
    </div>
  );
}
export default TodoItem;