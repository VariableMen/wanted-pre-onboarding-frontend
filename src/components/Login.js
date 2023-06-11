import React from "react";
import { Link } from "react-router-dom";
import "../css/Common.css";

//이메일 정규식
const emailRegEx = /@/;
//비밀번호 정규식
const passwordRegEx = /.{8,}/;

class Login extends React.Component {

    state = {
        email : "",
        password : "",
        emailCheck : false,
        passwordCheck : false
    }

    btnUserSignIn_OnClick = (e) => {
        if ( this.state.emailCheck && this.state.passwordCheck ) {
            alert('성공');
        } else {
            alert('실패');
        }
    };

    userEmail_OnChange = (e) => {
        this.setState({
            email: e.target.value
        });
        if (emailRegEx.test(e.target.value)) {
            this.state.emailCheck = true;
        } else {
            this.state.emailCheck = false;
        }
        this.LoginCheck();
    };

    userPassword_OnChange = (e) => {
        this.setState({
            password : e.target.value
        });
        if (passwordRegEx.test(e.target.value)) {
            this.state.passwordCheck = true;
        } else {
            this.state.passwordCheck = false;
        }
        this.LoginCheck();
    }

    LoginCheck = (e) => {
        if ( this.state.emailCheck && this.state.passwordCheck ) {
            
            console.log('성공');
        } else {
            
            console.log('실패');
        }
    }

    render() {
        return (
            <div className="Main">
                <span>로그인</span><br/>

                <span className="inputSpan">이메일</span>
                <input
                    placeholder="example@mail.com"
                    type="email"
                    data-testid="email-input"
                    value={this.state.email}
                    onChange={this.userEmail_OnChange}
                >
                </input><br/>

                <span className="inputSpan">비밀번호</span>
                <input
                    placeholder="비밀번호"
                    type="password"
                    data-testid="password-input"
                    value={this.state.password}
                    onChange={this.userPassword_OnChange}
                >
                </input><br/>

                <button
                    data-testid="signin-button"
                    type="button"
                    onClick={this.btnUserSignIn_OnClick}
                    disabled
                >
                    <span>로그인</span>
                </button><br/>

                <span>계정이 없으신가요?</span>
                <Link to="/signup">회원가입</Link><br/>
                <Link to="/">홈으로가기</Link>
            </div>
        )
    }
}

export default Login;