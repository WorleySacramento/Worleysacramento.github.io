/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './rm.module.css'
import Image from 'next/image';

import {IoSearchSharp} from "react-icons/io5";




export default function RickMortComponent( params) {
  const [query, setQuery] = useState('')
  const [characters, setCharacters] = useState([])
  const [alive, setAlive] = useState(Boolean)

  useEffect(() => {
  const fetchData = async () =>{
try {
const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)

setCharacters(data.results)
console.log(data, 'Aquii')
}
catch(error){
  console.error(error);
}

}

fetchData()
}, [query]);

const handleSubmit = (event) =>{
  event.preventDefault()

  const result = fetchData(characterId)
  console.log(result, 'Aquii Tambem')

}

  
  return (
    <div>
      <div className={styles.title}>
        <img className={styles.imgTitle} src='/images/Rick_and_Morty.svg'/>
      </div>
      <div className={styles.form}>
            <form  class="search">
              <input className={styles.input} value={query} onChange={event => setQuery(event.target.value)} type="text" placeholder="Personagem " />
              <button className={styles.button}><IoSearchSharp className={styles.icon}/></button>
              
            </form>
          </div>

          <div className={styles.container}>
{characters.map(item => ( 
          <div className={styles.content} key={item.id} >
        <div >
            <img className={styles.image} src={item.image}/>
        </div>
            <div className={styles.main}>
                <div className={styles.column}>Nome: <span className={styles.name}>{item.name}</span> </div>
                <div className={styles.column}>Espécie: <span className={styles.name}>{item.species}</span> </div>
                <div className={styles.column}>Gênero: <span className={styles.name}>{item.gender}</span> </div>
                <div className={styles.column}>Tipo: <span className={styles.name}>{item.type}</span> </div>
                <div className={styles.column}>Status: {''}
                 <span className={item.status === "Dead" 
                 ? `${styles.name} ${styles.redText}`
                  : item.status === "Alive" 
                  ? `${styles.name} ${styles.greenText}`:
                   styles.name}>{item.status}</span>
                </div>
                {/* </div> */}
                {/* {item.status}
                </span>
                 </div> */}
            
            </div>
        </div>
        ))} 
        </div>
 





    </div>
  )
}
