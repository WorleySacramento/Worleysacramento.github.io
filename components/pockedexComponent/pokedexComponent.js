import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './pokedex.module.css'
import {IoSearchSharp} from "react-icons/io5";


function PokedexComponent() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemon, setPokemon] = useState('pikachu');
  const [typePokemon, setTypePokemon] = useState('')
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const response = await axios.get(url)
      toArray.push(response.data);
      setTypePokemon(response.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(response, 'está aqui>>')
    } catch (error) {
      console.log(error, 'tem algo errado >>>')
    }
  }

  useEffect(() => {
    getPokemon();

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon()
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }





  return (
    <div className={styles.wrapper}>

      <div style={{width:'100%', height:'100%'}}>
        {/* <div > */}
          <div className={styles.imagename}>

            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Pokemon Logo" />
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit} class="search">
              <input className={styles.input} onChange={handleChange} type="text" placeholder="nome ou número pokemon " />
              <button className={styles.button}><IoSearchSharp className={styles.icon}/></button>
              
            </form>
          </div>
          {pokemonData.map((item, index) => {
            return (
              <div className={styles.container} key={index}>
                <div className={styles.imagemcard}>
                  <p>{ }</p>
                  <div className={styles.imagembody}>
                    <img className={styles.imagem} src={item.sprites.front_default} alt={item.name}/>
                  </div>
                </div>
                <div className={styles.tabcontainer}>

                <table className={styles.table}>
                <thead className={styles.th}>
                 <tr className={styles.tr}>
                    <th className={styles.th}>Nome</th>
                    <th className={styles.th}>Tipo</th>
                    <th className={styles.th}>Altura</th>
                    <th className={styles.th}>Peso</th>
                    <th className={styles.th}>XP</th>
                    {/* <th className={styles.th}>Nome</th> */}
                 </tr>

                </thead>
                  <tbody>
                    <tr className={styles.tr}>
                      <td className={styles.td}>{item.name}</td>
                      <td className={styles.td}>{typePokemon}</td>
                      <td className={styles.td}>{''}{Math.round(item.height * 3.9)}</td>
                      <td className={styles.td}>{ }{Math.round(item.weight / 4.3)} Kg</td>
                      <td className={styles.td}>{item.base_experience} Pts</td>
                      {/* <td className={styles.td}>{data?.abilities?.ability}</td> */}
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            )
          })}

        {/* </div> */}
      </div>
    </div>
  )
}

export default PokedexComponent