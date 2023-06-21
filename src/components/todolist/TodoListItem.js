import React, { useState } from "react";
import TodoListUpdate from '../todolist/TodoListUpdate';
import deleteImg from '../../image/delete.PNG';
import modifyImg from '../../image/modify.PNG';
import { fetchDeleteTodoList } from "../../api/todoListApi";
import { fetchGetTodoList } from "../../api/todoListApi";

const TodoListItem = ( {todoList, setTodoList} ) => {

    const { id, todo, isCompleted } = todoList;
    const [isEditTodoList, setIsEditTodoList] = useState(false);
    const token = localStorage.getItem('token');

    const btnModify_OnClick = (e) => {
        setIsEditTodoList(true);
    };

    const btnDelete_OnClick = async (e) => {
        
        const { error, message } = await fetchDeleteTodoList(token, id);
        if (error) {
            alert(message);
        } else {
            todoListSetting();
        }
        
    };

    const todoListSetting = async (e) => {
        
        const res = await fetchGetTodoList(token);
        if (res.length > 0) {
            setTodoList(res);
        } else {
            alert(res.message);
        }

    };

    return(
        <li className="todoListItem">
            {isEditTodoList ? (
                <TodoListUpdate
                    todoUpdate={todoList}
                    setIsEditTodoList={setIsEditTodoList}
                    setTodoList={setTodoList}
                >
                </TodoListUpdate>
            ) : (
                <label>
                    <input
                        id={id}
                        type="checkbox"
                        defaultChecked={isCompleted}
                    >
                    </input>
                    <span> {todo} </span>
                    <button
                        type="button"
                        data-testid="modify-button"
                        onClick={btnModify_OnClick}
                    ><img className="img" src={modifyImg}></img>
                    </button>
                    <button
                        type="button"
                        data-testid="delete-button"
                        onClick={btnDelete_OnClick}
                    ><img className="img" src={deleteImg}></img>
                    </button>
                </label>
            )
            }
            
        </li>
    );

}

export default TodoListItem;