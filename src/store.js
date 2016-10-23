
// We were goin to use redux, but just went with a object datastore, for the prototype due to lack of time.

let store = {
  session: {
    data: {
      email: "mbetz08@cmc.edu",
      first_name: "Amy",
      last_name: "Lachman",
      seeking: "roommate",
      age: 24,
      image_url: "https://assets.entrepreneur.com/content/16x9/822/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg",
      is_smoker: false,
      has_pets: false,
      has_children: false,
      lgbtq_friendly: true,
      sex: "female",
      relationship_status: "coupled",
      temperament: "introvert"
    },
    preference: {
      profile: 'mbetz08@cmc.edu',
      minimum_age: 21,
      maximum_age: 35,
      is_smoker: false,
      has_pets: false,
      has_children: false,
      lgbtq_friendly: true,
      sex: null,
      relationship_status: null,
      temperament: null
    },
    isLoading: true
  },
  rooms: {
    data: [],
    isLoading: true
  },
  addresses: {
    data: [],
    isLoading: true
  },
  profiles: {
    data: [],
    isLoading: true
  },
  preferences: {
    data: [],
    isLoading: true
  }
}

export default store
