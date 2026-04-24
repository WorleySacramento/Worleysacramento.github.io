import Link from 'next/link'
import styles from './work.module.css'
import { IoConstructOutline } from 'react-icons/io5';
import Image from 'next/image'
import PokedexImage from '@/public/images/pokemon.jpeg'
import RickMortyImage from '@/public/images/rickMorty.jpeg'
import TodoImage from '@/public/images/listaTarefa.jpeg'
import BuildImage from '@/public/images/build.jpeg'
import AguardeImage from '@/public/images/aguarde.jpeg'

function Work() {
  const featuredProjects = [
    {
      title: 'Pokedex',
      image: PokedexImage,
      imageAlt: 'Preview do projeto Pokedex',
      demoHref: '/pokedex',
      codeHref: 'https://github.com/WorleySacramento?tab=repositories',
      description: [
        'Problema: consultar dados de Pokemon de forma rapida e visual.',
        'Stack: Next.js, React, CSS Modules e consumo da PokeAPI.',
        'Decisao tecnica: busca direta por nome/numero com renderizacao condicional para simplificar o fluxo.',
        'Resultado: consulta em poucos segundos e experiencia clara para explorar informacoes.',
      ],
    },
    {
      title: 'Rick and Morty',
      image: RickMortyImage,
      imageAlt: 'Preview do projeto Rick and Morty',
      demoHref: '/rickMorty',
      codeHref: 'https://github.com/WorleySacramento?tab=repositories',
      description: [
        'Problema: encontrar personagens e visualizar dados sem navegar em varias telas.',
        'Stack: Next.js, React, Axios e API Rick and Morty.',
        'Decisao tecnica: pesquisa por nome no mesmo fluxo da listagem para reduzir friccao.',
        'Resultado: descoberta de personagens com feedback visual imediato.',
      ],
    },
    {
      title: 'Lista De Tarefa',
      image: TodoImage,
      imageAlt: 'Preview do projeto Lista de Tarefas',
      demoHref: '/todo',
      codeHref: 'https://github.com/WorleySacramento?tab=repositories',
      description: [
        'Problema: organizar tarefas do dia a dia com operacoes simples.',
        'Stack: Next.js, React, API Routes e FaunaDB.',
        'Decisao tecnica: separar leitura e escrita por endpoints para facilitar manutencao.',
        'Resultado: fluxo CRUD funcional para criar, atualizar e remover tarefas.',
      ],
      progress: 65,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>PROJETOS</h1>
        </div>
        <div className={styles.containersection}>

          {featuredProjects.map((project) => (
            <div className={styles.section} key={project.title}>
              <h3>{project.title}</h3>
              <div className={styles.sectionInner}>
                <div className={styles.descriptionFront}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    style={{
                      objectFit: 'fill',
                      width: '100%',
                      borderRadius: 15,
                      height: '100%'
                    }}
                  />
                </div>
                <div className={styles.paragrafoBack}>
                  <div className={styles.projectContent}>
                    {project.description.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                    {project.progress ? (
                      <div className={styles.progressWrap}>
                        <span>Em andamento <IoConstructOutline size={15} /></span>
                        <progress value={project.progress} max='100'></progress>
                        {project.progress}%
                      </div>
                    ) : null}
                    <div className={styles.ctaRow}>
                      <Link className={styles.ctaButton} href={project.demoHref}>
                        Demo
                      </Link>
                      <a
                        className={styles.ctaButton}
                        href={project.codeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Codigo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className={styles.section}>
          <h3>Novo Projeto</h3>
            <div className={styles.sectionInner}>
              <div className={styles.descriptionFront} >
                <Image
                  src={BuildImage}
                  alt="Preview de novo projeto em construcao"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href='/pageWork'>
                <p>Ainda em construção <IoConstructOutline size={40} /></p>
                <br/>
                    <span>Em andamento <IoConstructOutline size={15} /></span>
                    <progress value='5' max='100'></progress>100%
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
                  alt="Imagem ilustrativa de novidades em breve"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href='/pageWork'>
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
                  alt="Imagem ilustrativa de novidades em breve"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href='/pageWork'>
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
                  alt="Imagem ilustrativa de novidades em breve"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href='/pageWork'>
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
                  alt="Imagem ilustrativa de novidades em breve"
                  style={{
                    objectFit: 'fill',
                    width: '100%',
                    borderRadius: 15,
                    height: '100%'
                  }}
                />
              </div>
              <div className={styles.paragrafoBack}>
                <Link className={styles.link} href='/pageWork'>
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