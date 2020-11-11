import React from 'react'
import {Link} from 'react-router-dom'

export const PayersList = ({ payers }) => {
  if (!payers.length) {
    return <p className="center">Платників поки що немає</p>
  }

  return (
    <>
      <h1>Платники</h1>
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
          return (
            <tr key={payer._id}>
              <td>{index + 1}</td>
              <td>{payer.payerCode}</td>
              <td>
                <Link to={`/detail/${payer._id}`}>Відкрити</Link>
              </td>
            </tr>
          )
        }) }
        </tbody>
      </table>
    </>
  )
}
