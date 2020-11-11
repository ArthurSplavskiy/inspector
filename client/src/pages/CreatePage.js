import React, {useState, useEffect, useContext } from 'react'
import {useHttp} from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [payer, setPayer] = useState('')
    const [name, setName] = useState('')
    const [payerType, setPayerType] = useState('')
    const [tax, setTax] = useState('')
    const [income, setIncome] = useState('')
    const [period, setPeriod] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    useEffect(() => {
        window.M.updateTextFields()
        const elems = document.querySelectorAll('select');
        window.M.FormSelect.init(elems);
    }, [])

    const pressHandler = async event => {
            try {
                const data = await request('/api/payer/createpayer', 'POST', 
                {
                    payerCode: payer, 
                    payerName: name, 
                    payerType, 
                    payerTax: tax,
                    payerIncome: income,
                    payerPeriod: period,
                    payerPhone: phone,
                    payerEmail: email
                }, 
                {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.payer._id}`)
            } catch(e) {}
        
    }

    return (
        <div className="row payer-form">


            <div className="col s8 offset-s2">
                <h1 className="create-peyer-title">Створити платника</h1>
            </div>

            <div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>

                <input
                    className="create-input"
                    id="payer-code"
                    type="text"
                    value={payer}
                    onChange={e => setPayer(e.target.value)}
                    maxLength="10"
                />
                <label className="create-label" htmlFor="payer-code">Код платника</label>
                <input
                    className="create-input"
                    id="payer-name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label className="create-label" htmlFor="payer-name">ПІП Платника</label>


                <div className="select-con">
                    <select
                        value={payerType}
                        onChange={e => setPayerType(e.target.value)}
                    >
                        <option value="" disabled selected>Вид організації</option>
                        <option value="1">ФОП</option>
                        <option value="2">ТОВ</option>
                        <option value="3">ПП</option>
                    </select>
                </div>

                <div className="select-con">
                    <select
                        value={tax}
                        onChange={e => setTax(e.target.value)}
                    >
                        <option value="" disabled selected>Вид податку</option>
                        <option value="1">ЄП</option>
                        <option value="2">ЄСВ</option>
                        <option value="3">ПДВ</option>
                    </select>
                </div>

                <div className="input-con">
                    <div className="inner-con">
                        <input
                            className="create-input"
                            id="payer-income"
                            type="text"
                            value={income}
                            onChange={e => setIncome(e.target.value)}
                        />
                        <label className="create-label" htmlFor="payer-income">Річний дохід</label>
                    </div>
                    <div className="inner-con">
                        <input
                            className="create-input"
                            id="payer-period"
                            type="date"
                            value={period}
                            onChange={e => setPeriod(e.target.value)}
                        />
                        <label className="create-label" htmlFor="payer-period">Кінець податкового періоду</label>
                    </div>
                </div>

                <div className="input-con">
                    <div className="inner-con">
                        <input
                            className="create-input"
                            id="payer-phone"
                            type="text"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <label className="create-label" htmlFor="payer-phone">Телефон</label>
                    </div>
                    <div className="inner-con">
                        <input
                            className="create-input"
                            id="payer-email"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label className="create-label" htmlFor="payer-email">Email</label>
                    </div>
                </div>

                
                <div className="btn-con">
                    <a 
                        class="waves-effect waves-light btn blue"
                        onClick={pressHandler}
                    >
                        Створити
                    </a>
                </div>

            </div>
        </div>
    )
}