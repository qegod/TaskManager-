import {lazy, Suspense} from 'react';

const MainLazyComponent= lazy(() => import('../Main.tsx'));

export const MainLazy = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <MainLazyComponent/>
    </Suspense>
);