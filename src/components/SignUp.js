import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Common.css";

//이메일 정규식
const emailRegEx = /@/;
//비밀번호 정규식
const passwordRegEx = /.{8,}/;

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailCheck, setEmailCheck] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if ( localStorage.getItem('token') != undefined ) {
            window.location.href='/todo';
        }
    }, []);    

    const userEmail_OnChange = (e) => {
        setEmail(e.target.value);

        if (emailRegEx.test(e.target.value)) {
            setEmailCheck(true);
        } else {
            setEmailCheck(false);
        }
        signUpCheck();
    };

    const userPassWord_OnChange = (e) => {
        setPassword(e.target.value);

        if (passwordRegEx.test(e.target.value)) {
            setPasswordCheck(true);
        } else {
            setPasswordCheck(false);
        }
        signUpCheck();
    };

    const signUpCheck = (e) => {
        if ( emailCheck && passwordCheck ) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };

    const btnUserSignUp_OnClick = (e) => {
        signUp();
    };

    const signUp = (e) => {
        fetch('https://www.pre-onboarding-selection-task.shop/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => goToDoList(res))
    };

    const goToDoList = (data) => {
        if ( data.ok === true ) {
            alert('회원가입이 완료 되었습니다.');
            window.location.href='/signin';
        } else {
            alert( '회원가입에 실패하였습니다.' );
        }
    };

    return (
        <div className="Main">
            <span>회원가입</span><br/>

            <span className="inputSpan">이메일</span>
            <input
                placeholder="example@mail.com"
                data-testid="email-input"
                type="email"
                value={email}
                onChange={userEmail_OnChange}
            >
            </input><br/>

            <span className="inputSpan">비밀번호</span>
            <input 
                placeholder="8자리 이상 입력해주세요."
                data-testid="password-input"
                type="password"
                value={password}
                onChange={userPassWord_OnChange}
                required
            >
            </input><br/>

            <button
                className="signBtn"
                data-testid="signup-button"
                type="button"
                onClick={btnUserSignUp_OnClick}
                disabled={isDisabled}
            >
                <span>회원가입</span>
            </button><br/>

            <span>계정이 잇으신가요?</span>
            <Link to="/signin">로그인</Link><br/>
            <Link to="/">홈으로가기</Link>
        </div>

    );
}

export default SignUp;