import React, { useState, useEffect } from "react";
import "../../css/Common.css";
import TodoListItem from '../todolist/TodoListItem';

const TodoList = () => {

    useEffect(() => {
        if ( localStorage.getItem('token') !== undefined ) {
            console.log('로그인중');

            getTodoList();

            console.log(todoList);
        } else {
            window.location.href='/signin';
        }
    }, []);

    const [todoValue, setTodoValue] = useState('');
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            todo: '리액트 기초 공부하기',
            isCompleted: false
        },
        {
            id: 2,
            todo: '투두리스트 꾸미기',
            isCompleted: false
        }
    ]);

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
            .then(data => createToDolist(data))

    };

    const createToDolist = (data) => {
        setTodoValue('');
        console.log(data);
        getTodoList();
    };

    const getTodoList = () => {
        fetch('https://www.pre-onboarding-selection-task.shop/todos', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer '+localStorage.getItem('token') }
        })
            .then(res => res.json())
            .then(data => console.log(data))       
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
                role="list"
            >
                
            </ul>
        </div>
    );

}

export default TodoList;