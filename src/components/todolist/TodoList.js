import React, { useState, useEffect } from "react";
import "../../css/Common.css";
import TodoListItem from '../todolist/TodoListItem';

const TodoList = () => {

    useEffect(() => {
        if ( localStorage.getItem('token') !== undefined ) {
            console.log('로그인중');

            getTodoList();
            
        } else {
            window.location.href='/signin';
        }
    }, []);

    const [todoValue, setTodoValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const todoValue_OnChange = (e) => {
        setTodoValue(e.target.value);
    };

    const btnTodoList_OnClick = (e) => {

        if ( todoValue === "" ) {
            alert('할 일을 입력해주세요.');
            return;
        }

        fetch('https://www.pre-onboarding-selection-task.shop/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8',
                       'Authorization': 'Bearer '+localStorage.getItem('token') },
            body: JSON.stringify({
                todo : todoValue
            })
        })
            .then(res => res.json())
            .then(data => (createToDolist(data)))

    };

    const createToDolist = (data) => {
        setTodoValue('');
        
        getTodoList();
    };

    const getTodoList = () => {
        fetch('https://www.pre-onboarding-selection-task.shop/todos', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer '+localStorage.getItem('token') }
        })
            .then(res => res.json())
            .then(data => addToDoList(data))       
    };

    const addToDoList = (data) => {
        setTodoList(data);
    };

    return(
        <div className="Main">
            <h2>나의 TODO_LIST</h2>
            <input
                id="inpTodoList"
                type="text"
                data-testid="new-todo-input"
                placeholder="할 일을 입력하세요!"
                value={todoValue}
                onChange={todoValue_OnChange}
            ></input>
            <button
                className="todoListBtn"
                data-testid="new-todo-add-button"
                type="button"
                onClick={btnTodoList_OnClick}
            >
                <span>추가</span>
            </button>

            <ul
                className="todoListUl"
            >
                {todoList.map((value, index) => {
                    return <TodoListItem todoList={value} key={index} setTodoList={setTodoList} ></TodoListItem>
                })}
            </ul>
        </div>
    );

}

export default TodoList;