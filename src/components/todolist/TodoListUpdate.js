import { useState, useEffect } from "react";

const TodoListUpdate = ( {todoUpdate, setIsEditTodoList} ) => {
    const { id, todo, isCompleted } = todoUpdate;
    const [modifyTodo, setModifyTodo] = useState('');
    const [modifyIsCompleted, setModifyIsCompleted] = useState('');

    useEffect(() => {
        setModifyTodo(todo);
        setModifyIsCompleted(isCompleted);
    }, []);

    const btnSubmit_OnClick = (e) => {

        fetch('https://www.pre-onboarding-selection-task.shop/todos/'+id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8',
                       'Authorization': 'Bearer '+localStorage.getItem('token') },
            body: JSON.stringify({
            todo : modifyTodo ,
            isCompleted : modifyIsCompleted
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
        
        setIsEditTodoList(false);
    };

    const btnCancel_OnClick = (e) => {
        setIsEditTodoList(false);
    };

    const modifyCheck_OnChange = (e) => {
        setModifyIsCompleted(e.target.value);
    };

    const modifyTodo_OnChange = (e) => {
        setModifyTodo(e.target.value);
    };

    return(
        <div className="modify">
            <input
                type="checkbox"
                defaultChecked={modifyIsCompleted}
                onChange={modifyCheck_OnChange}
            ></input>
            <input
                type="text"
                data-testid="modify-input"
                defaultValue={modifyTodo}
                onChange={modifyTodo_OnChange}
            >
            </input>
            <button
                data-testid="submit-button"
                type="button"
                onClick={btnSubmit_OnClick}
            >제출</button>
            <button
                data-testid="cancel-button"
                type="button"
                onClick={btnCancel_OnClick}
            >취소</button>
        </div>
    );

}

export default TodoListUpdate;