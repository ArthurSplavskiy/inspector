import React, {useEffect, useState, useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {useHttp} from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch(e) {

        }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch(e) {

        }
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Інспектор</h1>

                <div className="card">
                    <div className="card-content white-text">
                    <span className="card-title">Авторизація</span>
                    <div>

                        <div className="input-field">
                            <input
                                id="email"
                                type="text"
                                name="email"
                                className="input-color"
                                value={form.email}
                                onChange={changeHandler}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                className="input-color"
                                value={form.password}
                                onChange={changeHandler}
                            />
                            <label htmlFor="password">password</label>
                        </div>

                    </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn white darken-4 black-text text-darken-2"
                            onClick={loginHandler}
                            disabled={loading}
                        >
                                Вхід
                        </button>
                        <button
                            className="btn register white darken-4 black-text text-darken-2"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                                Регістрація
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}