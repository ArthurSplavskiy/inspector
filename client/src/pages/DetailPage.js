import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {PayerCard} from '../components/PayerCard'

export const DetailPage = () => {
  const {token} = useContext(AuthContext)
  const {request, loading} = useHttp()
  const [payer, setPayer] = useState(null)
  const payerId = useParams().id

  const getPayer = useCallback(async () => {
    try {
      const fetched = await request(`/api/payer/${payerId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setPayer(fetched)
    } catch (e) {}
  }, [token, payerId, request])

  useEffect(() => {
    getPayer()
  }, [getPayer])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      { !loading && payer && <PayerCard payer={payer} /> }
    </>
  )
}
