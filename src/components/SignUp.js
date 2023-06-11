import React from "react"
import { Link } from "react-router-dom";

class SignUp extends React.Component {

    state = {
        email: "",
        password: ""
    };

    userEmail_OnChange = (e) => {

    };

    userPassWord_OnChange = (e) => {

    };

    userSignUp_OnClick = (e) => {

    };

    render() {
        return (
            <div>
                <span>회원가입</span>

                <span>이메일</span>
                <input
                    placeholder="example@mail.com"
                    data-testid="email-input"
                    type="email"
                    value={this.state.email}
                    onChange={this.userEmail_OnChange}
                >
                 </input>

                <span>비밀번호</span>
                <input 
                    placeholder="8자리 이상 입력해주세요."
                    data-testid="password-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.userPassWord_OnChange}
                >
                </input>

                <button
                    data-testid="signup-button"
                    type="button"
                    onClick={this.userSignUp_OnClick}
                >
                    회원가입
                </button>

                <span>계정이 잇으신가요?</span>
                <Link to="/signin">로그인</Link>
                <Link to="/">홈으로가기</Link>
            </div>

        )
    }
}

export default SignUp;