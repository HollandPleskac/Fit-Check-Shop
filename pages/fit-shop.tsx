import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { ethers } from 'ethers'
import classes from './fit-shop.module.css'
import checkmarkImg from '../public/checkmark.png'
import leftArrowImg from '../public/left-arrow.png'
import rightArrowImg from '../public/right-arrow.png'
import pants1Img from '../public/pants1.jpg'
import pants2Img from '../public/pants2.jpg'
import MetaMaskBtn from '../components/MetaMaskBtn'
import ConnectionContext from '../context/connectionContext'
import Store from '../artifacts/contracts/Store.sol/Store.json'

const storeAddress = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6'
const decimals = ethers.BigNumber.from(10).pow(18)
declare let window: any

const FitShop = () => {
  const connectionCtx = useContext(ConnectionContext)
  const [img, setImg] = useState(pants1Img)

  const buyHandler = async (amount: number) => {
    console.log(window.ethereum)
    console.log(connectionCtx.account)
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
        console.log('error sending ether')
      }
    }
  }

  const changeImg = () => {
    setImg((prevState) => {
      if (prevState === pants1Img) return pants2Img
      else return pants1Img
    })
  }

  return (
    <>
      <body>
        <div className='bg-blueColor py-6'>
          <div className='flex justify-between items-center px-16'>
            <Image
              className={classes.logo}
              src={checkmarkImg}
              alt='check mark'
              height='40'
              width='40'
            />
            <h1 style={{ fontSize: '25px' }}>Fit Check Shop</h1>
            <MetaMaskBtn connection={connectionCtx.connection} />
          </div>
        </div>
        <div className={classes.clear}></div>

        <div className={classes.menuBar}>
          <div className={classes.menuBarContainer}>
            <div className={classes.menuBarSpacing}>
              <p>shirts</p>
              <p>pants</p>
              <p>shoes</p>
              <p>tanks</p>
              <p>jackets</p>
              <p>hoodies</p>
              <p>dressy</p>
              <p>skirts</p>
              <p>sweaters</p>
              <p>athletics</p>
              <p>tops</p>
              {/* <p>jeans</p>
              <p>resell</p>
              <p>socks</p> */}
              <p className={classes.noBorder}>More</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center h-96'>
          <button className={classes.leftButton} onClick={changeImg}>
            <Image
              src={leftArrowImg}
              alt='left button'
              width='100'
              height='100'
            />
          </button>

          <div className='flex flex-col mx-8'>
            <Image src={img} className={classes.mainPhoto} alt='pants 1' />
            <button
              onClick={buyHandler.bind(null, 2)}
              className={classes.buyButton}
            >
              Buy!
            </button>
          </div>
          <button onClick={changeImg}>
            <Image
              src={rightArrowImg}
              className={classes.rightButton}
              alt='right button'
              width='100'
              height='100'
            />
          </button>
        </div>
      </body>
    </>
  )
}

export default FitShop
