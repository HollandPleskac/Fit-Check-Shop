import React, { useContext } from 'react'
import MetaMaskBtn from '../components/MetaMaskBtn'
import ConnectionContext from '../context/connectionContext'
import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json'

const greeterAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'
// set contract address
// set contract abi 0x5fbdb2315678afecb367f032d93f642f64180aa3

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
