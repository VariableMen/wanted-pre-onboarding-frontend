import React from "react"
import { Link } from "react-router-dom";
import "../css/Common.css";

const Main = () => {
    return (
        <div className="Main">
            <h3>TODO_LIST</h3>
            <p>할 일</p>
            <Link to="/signin">로그인</Link>
            <Link to="/signup">회원가입</Link>
        </div>
    );
};

export default Main;