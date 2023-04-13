import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Menu from '../../componentes/Menu'
import styles from './PaginaInicial.module.scss'
import Banner from '../../componentes/Banner'


export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <Banner />
                    </div>
                </section>
            </main>

        </>
    )
}
