import React, { useState, useEffect } from "react";
import "../css/Common.css";

const TodoList = () => {

    useEffect(() => {
        if ( localStorage.getItem('token') ) {
            console.log('로그인중');
        } else {
            window.location.href='/signin';
        }
    }, []);

    const btnTodoList_OnClick = (e) => {
        const addValue = document.getElementById("inpTodoList").value;
        const li = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        const span = document.createElement("span");
        const modifyBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");

        span.innerHTML = addValue;
        checkbox.type = 'checkbox';
        label.appendChild(checkbox);
        label.appendChild(span);
        li.appendChild(label);
        modifyBtn.setAttribute('data-testid', 'modify-button');
        modifyBtn.innerText = "수정";
        deleteBtn.innerHTML = "삭제";
        deleteBtn.setAttribute('data-testid', 'delete-button');
        li.appendChild(modifyBtn);
        li.appendChild(deleteBtn);
        document.getElementById('todoList').appendChild(li);

        document.getElementById("inpTodoList").value = '';
    };

    return(
        <div className="Main">
            <h2>나의 TODO_LIST</h2>
            <input
                id="inpTodoList"
                type="text"
                data-testid="new-todo-input"
                placeholder="할 일을 입력하세요!"    
            ></input>
            <button
                className="todoListBtn"
                data-testid="new-todo-add-button"
                type="button"
                onClick={btnTodoList_OnClick}
            >추가</button>

            <ul
                className="todoListUl"
                id="todoList"
                role="list">

            </ul>
        </div>
    );

}

export default TodoList;