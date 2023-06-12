import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Common.css";

//이메일 정규식
const emailRegEx = /@/;
//비밀번호 정규식
const passwordRegEx = /.{8,}/;

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailCheck, setEmailCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);

    useEffect(() => {
        console.log('마운트');
    }, []);

    const btnUserSignIn_OnClick = (e) => {
        console.log('11');
    };

    const userEmail_OnChange = (e) => {
        setEmail(e.target.value);
        
        if (emailRegEx.test(e.target.value)) {
            setEmailCheck(true);
        } else {
            setEmailCheck(false);
        }
        loginCheck();
    };

    const userPassword_OnChange = (e) => {
        setPassword(e.target.value);

        if (passwordRegEx.test(e.target.value)) {
            setPasswordCheck(true);
        } else {
            setPasswordCheck(false);
        }
        loginCheck();
    };

    const loginCheck = (e) => {
        let btn = document.querySelector("[data-testid='signin-button']");
        if ( emailCheck && passwordCheck ) {
            btn.removeAttribute("disabled");
        } else {
            btn.setAttribute("disabled", "disabled");
        }
    };

    return (
        <div className="Main">
            <span>로그인</span><br/>

            <span className="inputSpan">이메일</span>
            <input
                placeholder="example@mail.com"
                type="email"
                data-testid="email-input"
                value={email}
                onChange={userEmail_OnChange}
            >
            </input><br/>

            <span className="inputSpan">비밀번호</span>
            <input
                placeholder="비밀번호"
                type="password"
                data-testid="password-input"
                value={password}
                onChange={userPassword_OnChange}
            >
            </input><br/>

            <button
                data-testid="signin-button"
                type="button"
                onClick={btnUserSignIn_OnClick}
                disabled
            >
                <span>로그인</span>
            </button><br/>

            <span>계정이 없으신가요?</span>
            <Link to="/signup">회원가입</Link><br/>
            <Link to="/">홈으로가기</Link>
        </div>
    );
}

export default Login;