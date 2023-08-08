import React from 'react'
import Link from 'next/link'
import styles from './work.module.css'

function Work() {
  return (
    <div className={styles.wrapper}>
          <div className={styles.container}>
        <div className={styles.title}>
        <h1>Paginas</h1>
        </div>
              <div className={styles.section}>

                  <Link className={styles.link} href='/pokedex'>
                      <h3>Pokedex</h3>
                    <p>Consumo da Api Pokedex, e retornando os dados!</p>
                  </Link>
              </div>
              <div className={styles.section}>

                  <Link href='/pokedex'>
                      <h3>Pokedex</h3>
                    
                  </Link>
              </div>
              <div className={styles.section}>

                  <Link href='/pokedex'>
                      <h3>Pokedex</h3>

                  </Link>
              </div>
              <div className={styles.section}>

                  <Link href='/pokedex'>
                      <h3>Pokedex</h3>

                  </Link>
              </div>
              <div className={styles.section}>

                  <Link href='/pokedex'>
                      <h3>Pokedex</h3>

                  </Link>
              </div>
        </div>
    </div>
  )
}

export default Work