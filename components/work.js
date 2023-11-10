// import React from 'react';
import Link from 'next/link'
import styles from './work.module.css'
import { IoConstructOutline } from 'react-icons/io5'


function Work() {
  return (
    <div className={styles.wrapper}>
          <div className={styles.container}>
        <div className={styles.title}>
        <h1>Páginas</h1>
        </div>
        <div className={styles.containersection}>

              <div className={styles.section}>
                  <Link className={styles.link} href='/pokedex'>
                     <div className={styles.description}>
                     <h3>Pokedex</h3>
                    </div>
                  <div  className={styles.paragrafo}>
                  <p>
                  A Pokédex é uma enciclopédia digital abrangente que cataloga e fornece informações
                   detalhadas sobre todas as espécies de Pokémon conhecidas. Com a popularidade global 
                   da franquia Pokémon, a API Pokédex emerge como uma fonte rica e confiável de dados que
                    pode ser aproveitada para criar experiências interativas e educativas.
                  </p>
                  </div>
                  </Link>
              </div>
              
              <div className={styles.section}>
              <Link className={styles.link} href='/rickMorty'>
                     <div className={styles.description}>
                     <h3>Rick Morty</h3>
                     {/* <p>Ainda em construção <IoConstructOutline size={40}/></p> */}
                    </div>
                  <div  className={styles.paragrafo}>
                  <p>Ao acessar a página, você será recebido com uma interface simples e amigável.
                     Um campo de pesquisa intuitivo convida você a digitar o nome do personagem que
                      deseja conhecer melhor. Após inserir o nome e pressionar Pesquisar, 
                      nossa página utiliza a API oficial de Rick and Morty para buscar 
                      informações detalhadas sobre o personagem em questão.</p>
                  </div>
                </Link>
              </div>
              <div className={styles.section}>
              <Link className={styles.link} href='/'>
                     <div className={styles.description}>
                     <h3>Novo Projeto</h3>
                     {/* <p>Ainda em construção <IoConstructOutline size={40}/></p> */}
                    </div>
                  <div  className={styles.paragrafo}>
                  <p>Ainda em construção <IoConstructOutline size={40}/></p>
                  </div>
                </Link>
              </div>
              <div className={styles.section}>
              <Link className={styles.link} href='/'>
                     <div className={styles.description}>
                     <h3>Novo Projeto</h3>
                     {/* <p>Ainda em construção <IoConstructOutline size={40}/></p> */}
                    </div>
                  <div  className={styles.paragrafo}>
                  <p>Ainda em construção <IoConstructOutline size={40}/></p>
                  </div>
                </Link>
              </div>
              <div className={styles.section}>
              <Link className={styles.link} href='/'>
                     <div className={styles.description}>
                     <h3>Novo Projeto</h3>
                     {/* <p>Ainda em construção <IoConstructOutline size={40}/></p> */}
                    </div>
                  <div  className={styles.paragrafo}>
                  <p>Ainda em construção <IoConstructOutline size={40}/></p>
                  </div>
                </Link>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Work