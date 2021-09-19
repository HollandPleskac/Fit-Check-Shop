import React from 'react'
import classes from './fit-shop.module.css'
import Image from 'next/image'
import checkmarkImg from '../public/checkmark.png'
import leftArrowImg from '../public/left-arrow.png'
import rightArrowImg from '../public/right-arrow.png'
import pants1Img from '../public/pants1.jpg'
import pants2Img from '../public/pants2.jpg'

const FitShop = () => {
  return (
    <>
      <head>
        <title>Fit-Shop</title>
      </head>
      <body>
        <div className={classes.topBar}>
          <div className={classes.topBarSection}>
            <image
              className={classes.logo}
              src={checkmarkImg}
              height='40'
              width='40'
            />
            <h1>Fit Check Shop</h1>
            <button className={classes.topBarButton}>
              Connect to Meta Mask
            </button>
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
              <p>jeans</p>
              <p>resell</p>
              <p>socks</p>
              <p className={classes.noBorder}>More</p>
            </div>
          </div>
        </div>

        <div className={classes.pageContainer}>
          <div className={classes.mainImage}>
            <input
              type='image'
              id='left-button'
              src='images/left-arrow.png'
              width='100'
              height='100'
            />

            <div>
              <Image
                src={pants1Img}
                className={classes.mainPhoto}
                alt='pants 1'
              />
              <button id='buy-button'>Buy!</button>
            </div>

            <input
              type='image'
              id='right-button'
              src='images/right-arrow.png'
              width='100'
              height='100'
            />
          </div>
        </div>
      </body>
    </>
  )
}

export default FitShop
