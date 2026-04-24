/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './rm.module.css'

const IS_PROD = process.env.NODE_ENV === 'production'
const RM_API = IS_PROD
  ? 'https://rickandmortyapi.com/api'
  : '/api'

const endpoints = {
  search: (name) =>
    IS_PROD
      ? `${RM_API}/character/?name=${encodeURIComponent(name)}`
      : `${RM_API}/rickmorty?name=${encodeURIComponent(name)}`,
  all: (page = 1) =>
    IS_PROD
      ? `${RM_API}/character?page=${page}`
      : `${RM_API}/rickmorty-all?page=${page}`,
}

export default function RickMortComponent() {
  const [query, setQuery] = useState('morty')
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [characterList, setCharacterList] = useState([])
  const [loadingList, setLoadingList] = useState(false)

  const fetchCharacters = async (name) => {
    setLoading(true)
    setError('')
    try {
      const { data } = await axios.get(endpoints.search(name))
      setCharacters(data.results || [])
    } catch {
      setCharacters([])
      setError('Nenhum personagem encontrado com esse nome.')
    } finally {
      setLoading(false)
    }
  }

  const fetchAllCharacters = async () => {
    setLoadingList(true)
    try {
      const { data } = await axios.get(endpoints.all(1))
      setCharacterList(data.results || [])
    } catch {
      setCharacterList([])
    } finally {
      setLoadingList(false)
    }
  }

  useEffect(() => {
    fetchCharacters('morty')
    fetchAllCharacters()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!query.trim()) return
    fetchCharacters(query.trim())
  }

  const handleSelectCharacter = (name) => {
    setQuery(name)
    fetchCharacters(name)
  }

  return (
    <div>
      <div className={styles.title}>
        <img className={styles.imgTitle} src='/images/Rick_and_Morty.svg' alt='Logo do Rick and Morty' />
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit} className="search">
          <input
            className={styles.input}
            value={query}
            onChange={event => setQuery(event.target.value)}
            type="text"
            placeholder="Personagem"
          />
        </form>
      </div>

      <div className={styles.suggestionsContainer}>
        <h2 className={styles.suggestionsTitle}>Personagens Disponíveis</h2>
        {loadingList && <p className={styles.loadingText}>Carregando personagens...</p>}
        {!loadingList && characterList.length > 0 && (
          <ul className={styles.characterList}>
            {characterList.map((char) => (
              <li key={char.id} className={styles.characterItem}>
                <button
                  className={styles.characterButton}
                  onClick={() => handleSelectCharacter(char.name)}
                  title={char.name}
                >
                  <img src={char.image} alt={char.name} className={styles.characterThumb} />
                  <span className={styles.characterName}>{char.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {loading && <p>Carregando personagens...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && characters.length === 0 && (
        <p>Nenhum personagem para exibir.</p>
      )}

      <div className={styles.container}>
        {characters.map(item => (
          <div className={styles.content} key={item.id}>
            <div>
              <img className={styles.image} src={item.image} alt={`Personagem ${item.name}`} />
            </div>
            <div className={styles.main}>
              <div className={styles.column}>Nome: <span className={styles.name}>{item.name}</span></div>
              <div className={styles.column}>Espécie: <span className={styles.name}>{item.species}</span></div>
              <div className={styles.column}>Gênero: <span className={styles.name}>{item.gender}</span></div>
              <div className={styles.column}>Tipo: <span className={styles.name}>{item.type}</span></div>
              <div className={styles.column}>Status:{' '}
                <span className={
                  item.status === "Dead"
                    ? `${styles.name} ${styles.redText}`
                    : item.status === "Alive"
                    ? `${styles.name} ${styles.greenText}`
                    : styles.name
                }>{item.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}