
const TodoListItem = ( {todoList} ) => {
    const { id, todo, isCompleted } = todoList;

    const btnModify_OnClick = (e) => {
        console.log('modify_onCLick');
    };

    const btnDelete_OnClick = (e) => {
        console.log('delete_onClick');
    };

    return(
        <li className="todoListItem">
            <label>
                <input
                    id={id}
                    type="checkbox"
                    checked={isCompleted}>

                </input>
                <span> {todo} </span>
            </label>
            <button
                data-testid="modify-button"
                onClick={btnModify_OnClick}
            >수정
            </button>
            <button
                data-testid="delete-button"
                onClick={btnDelete_OnClick}
            >삭제
            </button>
        </li>
    );

}

export default TodoListItem;