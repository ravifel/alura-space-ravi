import React from 'react'
import styles from './Populares.module.scss'
import fotosPopulares from "./fotos-populares.json"

export default function Populares() {
    return (
        <aside className={styles.populares}>
            <h2 >Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotosPopulares.map((fotoPopular) => {
                    return (
                        <div>
                            <li key={fotoPopular.id}>
                                <img src={fotoPopular.path} alt={fotoPopular.alt} />
                            </li>
                        </div>
                    )
                })}
            </ul>
            <button className={styles.populares}>Ver mais fotos</button>
        </aside>
    );
}
