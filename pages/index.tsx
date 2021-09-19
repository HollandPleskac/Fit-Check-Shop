import React, { useState, useContext } from 'react'
import MetaMaskBtn from '../components/MetaMaskBtn'
import ConnectionContext from '../context/connectionContext'
import { ethers } from 'ethers'
import Store from '../artifacts/contracts/Store.sol/Store.json'

const storeAddress = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6'
const decimals = ethers.BigNumber.from(10).pow(18)
declare let window: any

const HomePage = () => {
  const connectionCtx = useContext(ConnectionContext)
  const [feedback, setFeedback] = useState('')

  const sendEtherHandler = async (amount: number) => {
    console.log(window.ethereum)
    console.log(connectionCtx.account)
    console.log('amount', amount)
    if (
      typeof window.ethereum !== undefined &&
      connectionCtx.account !== null
    ) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const storeContract = new ethers.Contract(storeAddress, Store.abi, signer)
      try {
        await storeContract.recieveEther({
          value: ethers.utils.parseEther(amount.toString()),
        })
      } catch (err) {
        console.log('error: ', err)
        setFeedback('error sending ether')
      }
    }
  }

  return (
    <div className=''>
      <MetaMaskBtn connection={connectionCtx.connection} />
      {connectionCtx.account}
      <button
        onClick={sendEtherHandler.bind(null, 2)}
        className='p-2 bg-red-600 rounded text-white'
      >
        Send Ether
      </button>
      <p>{feedback}</p>
    </div>
  )
}

export default HomePage
