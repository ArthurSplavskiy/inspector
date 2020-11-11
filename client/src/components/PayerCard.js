import React from 'react'

export const PayerCard = ({ payer }) => {
  
    let chose2 = 1
    let definitionType = ''
    switch (payer.payerType) {
        case '1':
            chose2 = 0.5
            definitionType = 'ФОП'
            break;
        case '2':
            chose2 = 1.2
            definitionType = 'ТОВ'
            break;
        case '3':
            chose2 = 2
            definitionType = 'ПП'
            break;
    }

    let chose1 = 1
    let definitionTax = ''
    switch (payer.payerTax) {
        case '1':
            chose1 = 5
            definitionTax = 'ЄП'
            break;
        case '2':
            chose1 = 22
            definitionTax = 'ЄСВ'
            break;
        case '3':
            chose1 = 20
            definitionTax = 'ПДВ'
            break;
    }
    const calc = payer.payerIncome * chose1 * chose2 / 100
  return (
    <>
      <h2>Платник</h2>

      <p>Код платника: <strong className="insert-data">{payer.payerCode}</strong></p>
      <p>ПІП: <strong className="insert-data">{payer.payerName}</strong></p>
      <p>Вид організації: <strong className="insert-data">{definitionType}</strong></p>
      <p>Вид податку: <strong className="insert-data">{definitionTax}</strong></p>
      <p>Річний дохід: <strong className="insert-data">{payer.payerIncome}</strong></p>
      <p>Кінець податкового періоду: <strong className="insert-data">{new Date(payer.payerPeriod).toLocaleDateString()}</strong></p>
      <p>Телефон: <strong className="insert-data">{payer.payerPhone}</strong></p>
      <p>Email: <strong className="insert-data">{payer.payerEmail}</strong></p>
      <strong className="tax">Податок: {calc}</strong>
      <p>Дата создания: <strong>{new Date(payer.date).toLocaleDateString()}</strong></p>
    </>
  )
}
