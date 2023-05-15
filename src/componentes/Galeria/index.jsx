import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards'

export default function Galeria() {

    const [itens, setItens] = useState(fotos);

    //Função para pegar as TAGS de cada foto.
    const tags = [...new Set(fotos.map((valor) => valor.tag))]
    //Foi criada uma constante chamada "TAGS"
    //Está sendo percorridas todas as fotos e sendo extraido o valor da "Tag"
    //Como não queremos pegar nomes repetidos de "Tags" foi usada a função "new Set()"
    //Essas "Tags estão sendo espalhadas dentro de um Array"
    //Cada posição do Array vai ser preenchida por uma "Tag", que é única.


    //FUNÇÃO - FILTRAR FOTOS
    const filtrarFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        })

        setItens(novasFotos);
    }


    return (
        <section className={styles.galeria} >

            <h2>Navegue pela galeria</h2>

            {/* As "Tags" vão ser passadas para o componente como uma Props */}
            <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />

            <Cards itens={itens} styles={styles} />

        </section >
    )
}
