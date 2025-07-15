import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../pages/Loading';
const AboutPage = lazy(() => import('../pages/AboutPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ListPage = lazy(() => import('../pages/todo/ListPage'));
const AddPage = lazy(() => import('../pages/todo/AddPage'));
const ReadPage = lazy(() => import('../pages/todo/ReadPage'));
const ModifyPage = lazy(() => import('../pages/todo/ModifyPage'));
const root = createBrowserRouter([
    {
        path: '/', element: (
            <Suspense fallback={<Loading />}>
                <MainPage />
            </Suspense>
        ),
    },
    {
        path: '/about', element: (
            <Suspense fallback={<Loading />}>
                <AboutPage />
            </Suspense>
        ),
    },
    {
        path: '/todo/list', element: (
            <Suspense fallback={<Loading />}>
                <ListPage />
            </Suspense>
        ),
    },
    {
        path: '/todo/add', element: (
            <Suspense fallback={<Loading />}>
                <AddPage />
            </Suspense>
        ),
    },
    {
        path: '/todo/read/:tno', element: (
            <Suspense fallback={<Loading />}>
                <ReadPage />
            </Suspense>
        ),
    },
    {
        path: '/todo/modify/:tno', element: (
            <Suspense fallback={<Loading />}>
                <ModifyPage />
            </Suspense>
        ),
    },
]);
export default root;