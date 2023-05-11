import React from 'react'
import styles from './Tags.module.scss'
import tags from "./tags.json"

export default function Tags() {
    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return (
                        <li key={tag.id}>{tag.titulo}</li>
                    );
                })}
                <li>Todas</li>
            </ul>
        </div>
    )
}
