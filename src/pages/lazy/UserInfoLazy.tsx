import {lazy, Suspense} from 'react'

export const UserInfoLazyComponent = lazy(()=> import('../UserInfo.tsx'))

export const UserInfoLazy = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <UserInfoLazyComponent/>
    </Suspense>
);