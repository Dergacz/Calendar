import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "../routes/routes";
import {useAppSelector} from "../hooks/hooks";

export const AppRouter = () => {
    const { isAuth } = useAppSelector(state => state.authSlice);
    return (
        <>
            {
                isAuth ? (
                    <Switch>
                        {
                            privateRoutes.map(route => (
                                <Route
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                    key={route.path}
                                />
                            ))
                        }
                        <Redirect to={RouteNames.EVENT} />
                    </Switch>
                ) : (
                    <Switch>
                        {
                            publicRoutes.map(route => (
                                <Route
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                    key={route.path}
                                />
                            ))
                        }
                        <Redirect to={RouteNames.LOGIN} />
                    </Switch>
                )
            }
        </>
    );
};
