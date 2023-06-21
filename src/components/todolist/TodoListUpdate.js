import { useState, useEffect } from "react";
import { fetchUpdateTodoList } from "../../api/todoListApi";
import { fetchGetTodoList } from "../../api/todoListApi";

const TodoListUpdate = ( {todoUpdate, setIsEditTodoList, setTodoList} ) => {
    const { id, todo, isCompleted } = todoUpdate;
    const [modifyTodo, setModifyTodo] = useState('');
    const [modifyIsCompleted, setModifyIsCompleted] = useState('');
    const token = localStorage.getItem('token');

    useEffect(() => {
        setModifyTodo(todo);
        setModifyIsCompleted(isCompleted);
    }, []);

    const btnSubmit_OnClick = async (e) => {

        const { error, message } = await fetchUpdateTodoList(token, id, modifyTodo, modifyIsCompleted);
        if (error) {
            alert(message);
        } else {
            todoListSetting();
        }

        setIsEditTodoList(false);
    };

    const todoListSetting = async (e) => {
        
        const res = await fetchGetTodoList(token);
        if (res.length > 0) {
            setTodoList(res);
        } else {
            alert(res.message);
        }        

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