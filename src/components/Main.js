import React from "react"
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            <h3>TODO_LIST</h3>
            <p>할 일</p>
            <Link to="/signin">로그인</Link>
            <Link to="/signup">회원가입</Link>
        </>
    );
};

export default Main;