import {lazy, Suspense} from 'react'

export const TasksLazyComponent = lazy(() => import('../Tasks.tsx'))

export const TasksLazy = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <TasksLazyComponent/>
    </Suspense>
);