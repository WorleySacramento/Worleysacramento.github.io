import { React, useEffect, useState } from "react";
import TodoItem from "./todoItem";
import styles from './todo.module.css'
import newData from "../../pages/api/getData/newData";



export default function TodoComponent(props) {
    const [inputData, setInputData] = useState({});
    const [data, setData] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    
    const requestParams = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: inputData }),
    };
    
    // async function fetchData() {
        //     const res = await fetch("../../pages/api/getData/newData",requestParams);
        //     const newData = await res.json();
        //     setData(newData);
        // }
        // useEffect(() => {
        //     fetchData();
        // }, [newTodo]);
        
        async function addTodoItem() {
            if (newTodo === "") return;
            let tempArr = data;
            tempArr.push(newTodo);
            setData([...tempArr])
            setNewTodo("")
            const response = await fetch("../../pages/api/getData/newData", requestParams).then((
                res) => res.json());
                }
                // return (
            // await fetch("../../pages/api/getData/newData", requestParams)
            // .then(() => newData())
            // .catch((e) => console.log(e));
        // }
        
        const handleinput = (e) => {
            setNewTodo(e.target.value);
            setInputData({
              ...inputData,
              newTodo: e.target.value,
            });
          };
          
          const HandleSubmit = (e) => {
            console.log(newTodo);
            addTodoItem();
            setNewTodo("");
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
                        onChange={(e) => handleinput(e)}
                    ></input>
                    <button onClick={() => HandleSubmit()}>
                        Add Todo
                    </button>
                </div>
            </div>
            <div>
                {
                   
                    data?.data?.map((todo) => (
                        <TodoItem key={todo.ref["@ref"].id} todo={todo} />
                    ))
                }
            </div>
        </div>
    )

}

