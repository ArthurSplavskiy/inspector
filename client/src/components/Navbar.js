import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper" style={{ padding: '0 2rem' }}>
                <span className="brand-logo">Інспектор</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Створити</NavLink></li>
                    <li><NavLink to="/payers">Платники</NavLink></li>
                    <li><NavLink to="/debtors">Боржники</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Вийти</a></li>
                </ul>
            </div>
        </nav>
    )
}