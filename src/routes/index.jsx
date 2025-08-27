
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from './RoutesConfig';
import NotFound from '../components/NotFound/NotFound';
import { Navigate, Route, Routes } from 'react-router';
import DashBoardLayout from '@/components/Layout/Layout';

const Router = () => {


    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={'/auth/login'} />} />

            {PUBLIC_ROUTES.map(({ key, path, Component }) => (
                <Route key={key} path={path} element={<Component />} />
            ))}

            <Route element={<DashBoardLayout />}>

                {PROTECTED_ROUTES.map(({ key, path, Component, url }) => {
                    const RouteComponent = Component;
                    return (
                        <Route
                            key={key}
                            path={path}
                            element={<RouteComponent />}
                        />
                    );
                })}
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Router;
