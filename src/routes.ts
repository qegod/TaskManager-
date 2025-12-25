import type {RouteObject} from 'react-router';
import {MainLazy} from "./pages/lazy/MainLazy";
import {AboutLazy} from "./pages/lazy/AboutLazy.tsx";
import {TasksLazy} from "./pages/lazy/TasksLazy.tsx";
import {UserInfoLazy} from "./pages/lazy/UserInfoLazy.tsx";


const ROUTES: RouteObject[] = [
    {
        path: '/',
        element: MainLazy(),
    },
    {
        path: '/about',
        element: AboutLazy(),
    },
    {
        path: '/tasks',
        element: TasksLazy(),
    },
    {
        path: '/userInfo',
        element: UserInfoLazy(),
    }
]

export default ROUTES;
