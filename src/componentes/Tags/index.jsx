import React from 'react'
import styles from './Tags.module.scss'
import tags from "./tags.json"

export default function Tags() {
    return (
        <div className={styles.tags}>
            <p className={styles.tags}>Filtre por tags:</p>
            <ul >
                {tags.map((tag) => {
                    return <li>{tag.titulo}</li>
                })}
            </ul>
        </div>
    )
}
