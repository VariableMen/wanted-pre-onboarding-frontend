import React, { useState, useEffect } from "react";
import "../../css/Common.css";
import TodoListItem from '../todolist/TodoListItem';
import { fetchCreateTodo } from "../../api/todoListApi";
import { fetchGetTodoList } from "../../api/todoListApi";

const TodoList = () => {

    useEffect(() => {
        if ( localStorage.getItem('token') != undefined ) {
            getTodoList();
            
        } else {
            window.location.href='/signin';
        }
    }, []);

    const [todoValue, setTodoValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const token = localStorage.getItem('token');

    const todoValue_OnChange = (e) => {
        setTodoValue(e.target.value);
    };

    const btnTodoList_OnClick = async (e) => {

        if ( todoValue === "" ) {
            alert('할 일을 입력해주세요.');
            return;
        }
        
        const { error, message } = await fetchCreateTodo(token, todoValue);
        if (error) {
            alert(message);
        } else {
            setTodoValue('');
            getTodoList();
        }
    };

    const getTodoList = async () => {

        const res = await fetchGetTodoList(token);
        if (res.length > 0) {
            setTodoList(res);
        } else {
            alert(res.message);
        }
        
    };

    const btnSignOut_OnClick = (e) => {
        localStorage.removeItem('token');
        window.location.href='/';
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
            <button 
                className="signOutBtn"
                type="button"
                onClick={btnSignOut_OnClick}
            >
                <span>로그아웃</span>
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