import React from 'react'
import css from "./style.module.css"

const MainPage = () => {
  return (
    <div>
        <h1 className={css.mainpageTitle}></h1>
        <p className={css.mainpageText}></p>
        <button className={css.mainpageButton}>
            <p className={css.mainpageButtontext}>Buy now on Steam</p>
            <p className={css.mainpagePrice}>$14.99</p>
        </button>
    </div>
  )
}

export default MainPage
