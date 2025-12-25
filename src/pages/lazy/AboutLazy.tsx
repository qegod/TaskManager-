import {lazy, Suspense} from 'react';

export const AboutLazyComponent = lazy(() => import("../About.tsx"))

export const AboutLazy = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <AboutLazyComponent/>
    </Suspense>
);