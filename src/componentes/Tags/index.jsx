import React from 'react'
import styles from './Tags.module.scss'

export default function Tags() {
    return (
        <div className={styles.tags}>
            <p className={styles.tags}>Filtre por tags:</p>
            <ul >
                <li>Estrelas</li>
                <li>Galáxias</li>
                <li>Lua</li>
                <li>Planetas</li>
            </ul>
        </div>
    )
}
