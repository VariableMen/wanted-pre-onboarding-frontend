import { BASE_URL } from "./BaseUrl";

export async function fetchLogin(userEmail, userPassword) {
    try {
        const response = await fetch(BASE_URL+'/auth/signin', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
            })
        });
        if (!response.ok) {
            throw response.status;
        }
        const responseData = await response.json();
        window.localStorage.setItem('token', responseData.access_token);
        return { message: "로그인 성공!" };
    } catch (error) {
        if (error === 401) {
            return {
                error,
                message: "이메일 혹은 비밀번호가 틀렸습니다."
            };
        }
        return {
            error,
            message: "로그인 중 에러가 발생했습니다."
        };
    }
}

export async function fetchSignup(userEmail, userPassword) {
    try {
        const response = await fetch(BASE_URL+'/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            })
        });
        if (!response.ok) {
            throw response.status;
        }
        return { message: "회원가입이 완료 되었습니다." };
    } catch (error) {
        if (error === 400) {
            return {
                error,
                message: "존재하는 이메일입니다. 다시 입력해주세요."
            };
        }
        return {
            error,
            message: "회원가입에 실패하였습니다."
        };
    }
}