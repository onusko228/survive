import { useState } from 'react'
import css from './style.module.css'

const Language = () => {
	const [isOpen, setIsOpen] = useState(false)
	const lang = [
		{
			name: 'ENG',
		},

		{
			name: 'DEU',
		},

		{
			name: 'FRA',
		},

		{
			name: 'UA',
		},
	]
	const toogleDropdown = () => {
		setIsOpen(!isOpen)
	}
	const [selectedlang, setSelectedlang] = useState('ENG')
		const dropLanguage = lang.filter(item => item.name !== selectedlang)
		console.log(dropLanguage)
	return (
		<div className={css.language__dropdown}>
			<div className={css.selected__language} onClick={toogleDropdown}>
				{selectedlang}
				<ul className={css.dropdown__menu}>
					{dropLanguage.map(({name}) => (
						<li key={name}>
							{name}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Language