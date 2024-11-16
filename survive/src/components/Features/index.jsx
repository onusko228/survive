import React from 'react'
import css from './style.module.css'
const Features = () => {
    return (
        <section className={css.features}>
            <div className={css.container}>
                <div className={css.features__wrapper}>
                    <h5 className={css.features__title}>What’s so special?</h5>
                    <h4 className={css.features__text}>features</h4>
                    <ul className={css.features__list}>
                        <li className={css.features__listItem}>
                            <h6 className={css.features__listTitle}>SURVIVE AT ALL COSTS</h6>
                            <p>You have 30 minutes to find a relic, signal for extraction, and grab
                                one of three spots on the rescue chopper.</p>
                        </li>
                        <li className={css.features__listItem}>
                            <h6 className={css.features__listTitle}>CREATE ALLIES & ENEMIES</h6>
                        </li>
                        <li className={css.features__listItem}>
                            <h6 className={css.features__listTitle}>IMPRESS THE AUDIENCE</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Features