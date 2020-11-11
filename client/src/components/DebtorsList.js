import React from 'react'
import {Link} from 'react-router-dom'

export const DebtorsList = ({ payers }) => {
  if (!payers.length) {
    return <p className="center">Божників поки що немає</p>
  }

  return (
    <>
      <h1>Боржники</h1>
      <table>
        <thead>
        <tr>
          <th>№</th>
          <th>Код платника</th>
          <th>Відкрити</th>
        </tr>
        </thead>

        <tbody>
        { payers.map((payer, index) => {
          const payerDate = Date.parse(payer.payerPeriod)
          const nowDate = Date.parse(new Date)
          if(payerDate < nowDate) {
            return (
              <tr key={payer._id}>
                <td>{index + 1}</td>
                <td>{payer.payerCode}</td>
                <td>
                  <Link to={`/detail/${payer._id}`}>Відкрити</Link>
                </td>
              </tr>
            )
          }
        }) }
        </tbody>
      </table>
    </>
  )
}
