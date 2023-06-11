import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {

    userSignIn_OnClick = () => {

    };

    render() {
        return (
            <div>
                <span>로그인</span>

                <span>이메일</span>
                <input
                    placeholder="example@mail.com"
                    type="email"
                    data-testid="email-input"
                >
                </input>

                <span>비밀번호</span>
                <input
                    placeholder="비밀번호"
                    type="password"
                    data-testid="password-input"
                >
                </input>

                <button
                    data-testid="signin-button"
                    type="button"
                    onClick={this.userSignIn_OnClick}
                >
                    로그인</button>

                <span>계정이 없으신가요?</span>
                <Link to="/signup">회원가입</Link>
                <Link to="/">홈으로가기</Link>
            </div>
        )
    }
}

export default Login;