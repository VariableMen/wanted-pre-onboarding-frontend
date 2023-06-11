import React from "react"
import { Link } from "react-router-dom";
import "../css/Common.css";

//이메일 정규식
const emailRegEx = /@/;
//비밀번호 정규식
const passwordRegEx = /.{8,}/;

class SignUp extends React.Component {

    state = {
        email: "",
        password: ""
    };

    userEmail_OnChange = (e) => {
        this.setState({
            email: e.target.value
        });
        if (emailRegEx.test(e.target.value)) {
            console.log('email'+'true');
        } else {
            console.log('email'+'false');
        }
    };

    userPassWord_OnChange = (e) => {
        this.setState({
            password : e.target.value
        });
        if (passwordRegEx.test(e.target.value)) {
            console.log('password'+'true');
        } else {
            console.log('password'+'false');
        }
    };

    btnUserSignUp_OnClick = (e) => {
        alert( this.state.email + '  ' + this.state.password );
    };

    render() {
        return (
            <div className="Main">
                <span>회원가입</span><br/>

                <span className="inputSpan">이메일</span>
                <input
                    placeholder="example@mail.com"
                    data-testid="email-input"
                    type="email"
                    value={this.state.email}
                    onChange={this.userEmail_OnChange}
                >
                 </input><br/>

                <span className="inputSpan">비밀번호</span>
                <input 
                    placeholder="8자리 이상 입력해주세요."
                    data-testid="password-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.userPassWord_OnChange}
                >
                </input><br/>

                <span className="inputSpan">비밀번호 확인</span>
                <input 
                    placeholder="8자리 이상 입력해주세요."
                    data-testid="password-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.userPassWord_OnChange}
                >
                </input><br/>

                <button
                    data-testid="signup-button"
                    type="button"
                    onClick={this.btnUserSignUp_OnClick}
                    disabled
                >
                    <span>회원가입</span>
                </button><br/>

                <span>계정이 잇으신가요?</span>
                <Link to="/signin">로그인</Link><br/>
                <Link to="/">홈으로가기</Link>
            </div>

        )
    }
}

export default SignUp;