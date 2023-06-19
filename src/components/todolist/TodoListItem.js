import React, { useState } from "react";
import TodoListUpdate from '../todolist/TodoListUpdate';

const TodoListItem = ( {todoList} ) => {
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
        
    };

    return(
        <li className="todoListItem">
            {isEditTodoList ? (
                <TodoListUpdate
                    todoUpdate={todoList}
                    setIsEditTodoList={setIsEditTodoList}
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
                    ><span>수정</span>
                    </button>
                    <button
                        type="button"
                        data-testid="delete-button"
                        onClick={btnDelete_OnClick}
                    ><span>삭제</span>
                    </button>
                </label>
            )
            }
            
        </li>
    );

}

export default TodoListItem;