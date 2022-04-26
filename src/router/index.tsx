import Cloud from '../view/cloud';
import Note from '../view/note'
const routers = [
    {
        title: '云盘',
        path: '/cloud',
        component: Cloud,
    },
    {
        title: '笔记',
        path: '/Note',
        component: Note,
    },
    // {
    //     title: '404',
    //     path: '/inbox',
    //     component: Err404,
    // }
];

export default routers;