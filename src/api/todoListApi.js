import { BASE_URL } from "./BaseUrl";

export async function fetchCreateTodo(token, todoValue) {
    try {
        const response = await fetch(BASE_URL+'/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8',
                       'Authorization': 'Bearer '+token },
            body: JSON.stringify({
                todo : todoValue
            })
        });
        if (!response.ok) {
            throw response.statusCode;
        }
        return await response.json();
    } catch (error) {
        if (error === 400) {
            return {
                error,
                message: "할일을 입력해주세요."
            };
        } else {
            return {
                error,
                message: "할일을 등록하는 도중 에러가 발생했습니다."
            };
        }
    }
}

export async function fetchGetTodoList(token) {
    try {
        const response = await fetch(BASE_URL+'/todos', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer '+token }
            
        });
        if (!response.ok) {
            throw response.statusCode;
        }
        return await response.json();
    } catch (error) {
        return {
            error,
            message: "할일을 불러오는 도중 에러가 발생했습니다."
        };
    }
}

export async function fetchDeleteTodoList(token, id) {
    try {
        const response = await fetch(BASE_URL+'/todos/'+id, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer '+token }
        });
        if (!response.ok) {
            throw response.statusCode;
        }
        return { message: "삭제 성공!" };
    } catch (error) {
        return {
            error,
            message: "삭제 실패!"
        }
    }
}

export async function fetchUpdateTodoList(token, id, modifyTodo, modifyIsCompleted) {
    try {
        const response = await fetch(BASE_URL+'/todos/'+id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
                       'Authorization': 'Bearer '+token },
            body: JSON.stringify({
                todo : modifyTodo ,
                isCompleted : modifyIsCompleted
            })
        });
        if (!response.ok) {
            throw response.statusCode;
        }
        return { message: "업데이트 성공!" };
    } catch (error) {
        return {
            error,
            message: "업데이트 실패!"
        }
    }
}
