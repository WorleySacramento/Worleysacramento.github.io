import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillProject } from 'react-icons/ai'
import React from "react";
import WorFoto from '@/public/images/worfoto.jpg'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, buildCanonicalUrl } from '@/lib/seo';


const inter = Inter({ subsets: ['latin'] })



export default function Home() {


  return (
    <>
      <Head>
        <title>Worley Sacramento | Desenvolvedor Front-end</title>
        <meta
          name="description"
          content="Portfolio de Worley Sacramento com projetos em React e Next.js, foco em interfaces acessiveis, performance e experiencia do usuario."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={buildCanonicalUrl('/')} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Worley Sacramento | Desenvolvedor Front-end" />
        <meta
          property="og:description"
          content="Conheca os principais projetos de Worley Sacramento em React e Next.js, com foco em qualidade tecnica e usabilidade."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Worley Sacramento | Desenvolvedor Front-end" />
        <meta
          name="twitter:description"
          content="Portfolio profissional com projetos web e detalhes tecnicos de implementacao."
        />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Olá, seja bem vindo(a)
          </p>
          <div className={styles.profile}>
          </div>
        </div>

        <div className={styles.center}>

          <div className={styles.description2}>
            <h1>Olá, meu nome é Worley!</h1>
            <h3>
              Estou animado para compartilhar
            </h3>
            <h3> meu portfólio com você!</h3>
          </div>
          <div className={styles.imagem}>
            <Image
              src={WorFoto}
              alt="Foto de perfil de Worley Sacramento"
              className={styles.foto}
              width={150}
              height={250}
            />
          </div>
        </div>

        <div className={styles.grid}>


          <Link
            href='/pageWork'
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Projetos <span>-&gt;</span><AiFillProject style={{ marginLeft: 10 }} />
            </h2>
          </Link>

          <Link
            href="/sobreMim"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Sobre mim <span>-&gt;</span>
            </h2>
          </Link>

          <a
            href="https://github.com/WorleySacramento"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Meu GitHub <span>-&gt;</span><FaGithub style={{ marginLeft: 10 }} />
            </h2>
            <p>
              Meu GitHub para consultas!
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/worley-sacramento-3b07721b7/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Linkedin <span>-&gt;</span><FaLinkedin style={{ marginLeft: 10 }} />
            </h2>
            <p>
              Atualizações de projetos.
            </p>
          </a>

        </div>
      </main>
    </>
  )
}
