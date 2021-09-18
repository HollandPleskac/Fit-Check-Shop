import React, { useContext } from 'react'
import MetaMaskBtn from '../components/MetaMaskBtn'
import ConnectionContext from '../context/connectionContext'

const HomePage = () => {
  const connectionCtx = useContext(ConnectionContext)

  return (
    <div className=''>
      <MetaMaskBtn connection={connectionCtx.connection} />
      {connectionCtx.account}
    </div>
  )
}

export default HomePage
