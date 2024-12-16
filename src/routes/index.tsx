import { lazy } from 'react';

import { useRoutes } from "react-router";

const Index = lazy(() => import("@/views/index/index"));

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <Index />,
        },
       
    ])
}
