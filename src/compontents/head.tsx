import React,{useCallback} from 'react';

import {useNavigate} from "react-router-dom";

function Head() {
    const navigate = useNavigate();

    function handleClick(n:string) {
        navigate(n);
    }

    return (
        <div>
            <div onClick={()=>handleClick('/cloud')}>cloud1</div>
            <div onClick={()=>handleClick('/note')}>note</div>
        </div>
    );
}

export default Head;