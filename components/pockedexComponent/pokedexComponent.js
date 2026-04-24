/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import styles from './pokedex.module.css'

function PokedexComponent() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemon, setPokemon] = useState('pikachu');
  const [searchInput, setSearchInput] = useState('pikachu');
  const [typePokemon, setTypePokemon] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getPokemon = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await axios.get(url);
      const toArray = [response.data];
      setTypePokemon(response.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (requestError) {
      setPokemonData([]);
      setTypePokemon('');
      setError('Pokemon nao encontrado. Tente outro nome ou numero.');
    } finally {
      setLoading(false);
    }
  }, [pokemon]);

  useEffect(() => {
    getPokemon();

  }, [getPokemon])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    setPokemon(searchInput.trim().toLowerCase());
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }





  return (
    <div className={styles.wrapper}>

      <div style={{width:'100%', height:'100%'}}>
        {/* <div > */}
          <div className={styles.imagename}>

            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Logo oficial Pokemon" />
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit} className="search">
              <input className={styles.input} value={searchInput} onChange={handleChange} type="text" placeholder="nome ou numero pokemon" />
              
            </form>
          </div>
          {loading && <p>Carregando Pokemon...</p>}
          {!loading && error && <p>{error}</p>}
          {!loading && !error && pokemonData.length === 0 && (
            <p>Nenhum resultado para a busca atual.</p>
          )}
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