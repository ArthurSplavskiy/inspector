import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {AuthContext} from '../context/AuthContext'
import {Loader} from '../components/Loader'
import {DebtorsList} from '../components/DebtorsList'

export const DebtorsPage = () => {
  const [payers, setPayers] = useState([])
  const {loading, request} = useHttp()
  const {token} = useContext(AuthContext)

  const fetchPayers = useCallback(async () => {
    try {
      const fetched = await request('/api/payer', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      setPayers(fetched)
    } catch (e) {}
  }, [token, request])

  useEffect(() => {
    fetchPayers()
  }, [fetchPayers])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <DebtorsList payers={payers} />}
    </>
  )
}
