const RMQuery = 
  `query{
    characters(page: 2, filter: {name: "Morty"}) {
        info {
          count
        }
        results {
          id
          name
          gender
          image
          species
        }
      }
      location(id: 1) {
        id
      }
      episodesByIds(ids: [1, 2]) {
        id
      }
  }
  `