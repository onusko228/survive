import React from 'react'
import logo from "../../static/mainlogo.svg"
import navList from "./utils.js"

const Header = () => {
  return (
    <header className={css.header}>
        <a className={css.headerLogo} href='#'>
            <img src={logo}/>
        </a>
        <ul className={css.headerList}>
        {navList.map(({ id, name, slug }) => (
					<li key={id} className={css.headerListItem}>
						<a className={css.headerListLink} href={slug}>{name}</a>
					</li>
				))}
        </ul>
    </header>
  )
}

export default Header