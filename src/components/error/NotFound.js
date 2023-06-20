import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>나의 TODO_LIST</h1>
            <h3>죄송합니다. 없는 페이지입니다.</h3>
            <Link to="/">돌아가기</Link>
        </div>
    );
}

export default NotFound;