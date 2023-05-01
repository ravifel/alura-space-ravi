import React from 'react'
// import home from '../../assets/icones/home-ativo.png'
// import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
// import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
// import novas from '../../assets/icones/novas-inativo.png'
// import surpreendaMe from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'
import icones from './icones.json'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>

                {icones.map((icone) => {
                    return (
                        <div>
                            <li className={styles.menu__item}>
                                <img src={icone.imagem} alt="" />
                                <a href="/">{icone.nome}</a>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </nav>
    )
}
