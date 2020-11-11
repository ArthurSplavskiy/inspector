import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PayersPage} from './pages/PayersPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import {DebtorsPage} from './pages/DebtorsPage'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/payers" exact>
                    <PayersPage />
                </Route>
                <Route path="/create">
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Route path="/debtors">
                    <DebtorsPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}