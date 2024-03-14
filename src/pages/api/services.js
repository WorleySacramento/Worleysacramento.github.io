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

  const secretKey = 'fnacapi_omd2ZXJzaW9uAWdwYXlsb2FkWFiiYmlkcjM4NjY3ODc3MjQ1MzA4MTY2NmZzZWNyZXR4OGhPRHpMU1BaY2d0TmR6WnBGcU5IY0VmWTBOOVZSb1gvVGlvK0E2T3hEM0ora21Oa0t4S1NjQT09'