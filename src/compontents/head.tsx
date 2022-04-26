import React from 'react';
import style from '../css/component.module.scss';
import { useNavigate } from "react-router-dom";

function Head() {
    const navigate = useNavigate();

    function handleClick(n: string) {
        navigate(n);
    }

    return (
        <div className={style.head_container}>
            <div className={style.logo_wrapper}>
                <img className='logImg' src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt="" />
                <h2 className="text">xyCloud</h2>
            </div>
            <div className='link_btn' onClick={() => handleClick('/cloud')}>云盘</div>
            <div className='link_btn' onClick={() => handleClick('/note')}>笔记</div>
        </div>
    );
}
export default Head;