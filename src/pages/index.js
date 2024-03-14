import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoConstructOutline } from "react-icons/io5";
import { AiFillProject } from 'react-icons/ai'
import React, { useRef } from "react";
import WorFoto from '@/public/images/worfoto.jpg'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {


  return (
    <>
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
              alt="foto"
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
            rel="noopener noreferrer"
          >
            <h2>
              Projetos <span>-&gt;</span><AiFillProject style={{ marginLeft: 10 }} />
            </h2>
          </a>

          <a
            href="./sobreMim"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Sobre mim <span>-&gt;</span>
            </h2>
          </a>

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
            target="_parent"
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
