import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import worfoto from '@/public/images/worfoto.jpg'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import {IoConstructOutline } from "react-icons/io5";


const inter = Inter({ subsets: ['latin'] })

const gitGif = '/public/images/gitHub.gif'

export default function Home() {
  return <>
    <Head>
      <title>Worley Sacramento</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.description}>
        <p>
         Olá, seja bem vindo(a)
        </p>
        <div className={styles.profile}>
            {/* <Image
              src={worfoto}
              alt="Vercel Logo"
              className={styles.foto}
              width={250}
              height={250}
              priority
            /> */}
      {/* <Image
              src="/Wor-Foto.jpg"
              alt="Vercel Logo"
              // className={styles.foto}
              width={300}
              height={200}
              priority
            /> */}
        </div>
      </div>

      <div className={styles.center}>
      <div className={styles.description2}>
      <h2> 
       Me chamo Worley, em 06/2023 me graduei
       Análise e Desenvolvimento de Sistemas,
       fique a vontade para conhecer meu portifólio!
     </h2>
     {/* <p>Ainda em construção <IoConstructOutline size={40}/></p> */}
     
      </div>
      <div className={styles.imagem}>
      <Image
              src={worfoto}
              alt="Vercel Logo"
              className={styles.foto}
              width={150}
              height={250}
              priority
            />
      </div>
      </div>

      <div className={styles.grid}>
        <a
          href={'./pageWork'}
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Projetos <span>-&gt;</span>
          </h2>
          {/* <p>
            Trampos, hospedados no meu github.
          </p> */}
          <p>Ainda em construção <IoConstructOutline size={40}/></p>
        </a>

        <a
          href="www.google.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sobre mim <span>-&gt;</span>
          </h2>
          {/* <p>
            Esse início de carreira.
          </p> */}
          <p>Ainda em construção <IoConstructOutline size={40}/></p>
        </a>

        <a
          href="https://github.com/WorleySacramento"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Meu GitHub <span>-&gt;</span><FaGithub style={{ marginLeft:10}}/>
          </h2>
        </a>

        <a
          href="https://www.linkedin.com/in/worley-sacramento-3b07721b7/"
          className={styles.card}
          target="_parent"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span>-&gt;</span><FaLinkedin style={{ marginLeft:10}}/>
          </h2>
          <p>
            Acompanhe meu blog!
          </p>
        </a>
      </div>
    </main>
  </>;
}
