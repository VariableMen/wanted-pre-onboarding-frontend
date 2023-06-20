import React, { useState } from "react";
import TodoListUpdate from '../todolist/TodoListUpdate';
import deleteImg from '../../image/delete.PNG';
import modifyImg from '../../image/modify.PNG';

const TodoListItem = ( {todoList, setTodoList} ) => {
    const { id, todo, isCompleted } = todoList;
    const [isEditTodoList, setIsEditTodoList] = useState(false);

    const btnModify_OnClick = (e) => {
        setIsEditTodoList(true);
    };

    const btnDelete_OnClick = (e) => {
        console.log('https://www.pre-onboarding-selection-task.shop/todos/'+id);
        fetch('https://www.pre-onboarding-selection-task.shop/todos/'+id, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer '+localStorage.getItem('token') }
        })
            .then(res => ( res.ok ? todoListSetting() : alert('삭제 실패') ))
    };

    const todoListSetting = (e) => {
        
        fetch('https://www.pre-onboarding-selection-task.shop/todos', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer '+localStorage.getItem('token') }
        })
            .then(res => res.json())
            .then(data => setTodoList(data))         

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