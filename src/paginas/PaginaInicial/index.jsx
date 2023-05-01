import React from 'react'
import Cabecalho from '../../componentes/Cabecalho'
import Menu from '../../componentes/Menu'
import styles from './PaginaInicial.module.scss'
import Banner from '../../componentes/Banner'
import Rodape from '../../componentes/Rodape'
import Galeria from '../../componentes/Galeria'


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
                <div>
                    <Galeria />
                </div>
            </main>
            <Rodape />
        </>
    )
}
