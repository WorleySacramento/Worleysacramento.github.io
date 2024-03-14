import Link from 'next/link'
import styles from './work.module.css'
import { IoConstructOutline } from 'react-icons/io5';
import Image from 'next/image'
import PokedexImage from '@/public/images/pokemon.jpeg'
import RickMortyImage from '@/public/images/rickMorty.jpeg'
import TodoImage from '@/public/images/listaTarefa.jpeg'
import BuildImage from '@/public/images/build.jpeg'
import AguardeImage from '@/public/images/aguarde.jpeg'



const Poke = '../../public/images/pokemon.jpeg'

function Work() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>PROJETOS</h1>
        </div>
        <div className={styles.containersection}>

          <div className={styles.section}>
            <h3>Pokedex</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={PokedexImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack} >
                <Link className={styles.link} href='/pokedex'>
                  <p>
                    A Pokédex é uma enciclopédia digital abrangente que cataloga e fornece informações
                    detalhadas sobre todas as espécies de Pokémon conhecidas. Com a popularidade global
                    da franquia Pokémon, a API Pokédex emerge como uma fonte rica e confiável de dados que
                    pode ser aproveitada para criar experiências interativas e educativas.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Rick Morty</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={RickMortyImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href='/rickMorty'>
                  <p>Ao acessar a página, você será recebido com uma interface simples e amigável.
                    Um campo de pesquisa intuitivo convida você a digitar o nome do personagem que
                    deseja conhecer melhor. Após inserir o nome e pressionar Pesquisar,
                    nossa página utiliza a API oficial de Rick and Morty para buscar
                    informações detalhadas sobre o personagem em questão.</p>
                </Link>
              </div>
            </div>
          </div>


          <div className={styles.section}>
            <h3>Lista De Tarefa</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={TodoImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href='/todo'>
                  <p>
                    Uma aplicação de lista de tarefas é uma ferramenta simples,
                    mas poderosa, projetada para ajudar os usuários a gerenciar suas tarefas diárias,
                    organizando e priorizando suas atividades. </p>
                </Link>
              </div>
            </div>
          </div>
          
          <div className={styles.section}>
          <h3>Novo Projeto</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={BuildImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Ainda em construção <IoConstructOutline size={40} /></p>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
          <h3>Aguarde ...</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={AguardeImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Aguarde Novidades <IoConstructOutline size={40} /></p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.section}>
          <h3>Aguarde ...</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={AguardeImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Aguarde Novidades <IoConstructOutline size={40} /></p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.section}>
           <h3>Aguarde ...</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={AguardeImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Aguarde Novidades <IoConstructOutline size={40} /></p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.section}>
          <h3>Aguarde ...</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={AguardeImage}
                  alt="foto"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href=''>
                <p>Aguarde Novidades <IoConstructOutline size={40} /></p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Work