
import css from './style.module.css'
import logo from '../../static/mainlogo.svg'
import {navList} from './utils.js'
import Language from '../language/index.jsx'
import steam from'../../static/steamicon.svg'
import xbox from'../../static/xboxicon.svg'

const Header = () => {
	return (
		<header className={css.header}>
			<a className={css.headerLogo} href='#'>
				<img src={logo} />
			</a>
			<ul className={css.headerList}>
				{navList.map(({ id, name, slug }) => (
					<li key={id} className={css.headerListItem}>
						<a className={css.headerListLink} href={slug}>
							{name}
						</a>
					</li>
				))}
			</ul>
				<Language/>
        <a className={css.headerXbox} href="xbox">
          <img src={xbox}/>
        </a>
        <a className={css.headerSteam} href="steam">
          <img src={steam}/>
        </a>
		</header>
	)
}

export default Header
