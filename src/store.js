
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
    isLoading: false
  },
  rooms: {
    data: [
    {
      monthly_rent: 765,
      deposit: 500,
      title: 'Room title',
      description: 'Raclette bespoke hella tacos 8-bit chia everyday carry. Chartreuse food truck celiac, twee edison bulb kitsch occupy tilde cold-pressed. Offal trust fund waistcoat pop-up man braid. Hell of cronut plaid VHS tattooed. Cronut venmo pug, dreamcatcher forage selfies vice hella mustache sriracha aesthetic kogi church-key XOXO brunch. Bitters +1 intelligentsia pug. Helvetica vinyl narwhal dreamcatcher, austin vexillologist copper mug you probably haven\'t heard of them.',
      square_footage: 123,
      number_of_rooms: 2,
      number_of_bathrooms: 1,
      has_yard: false,
      has_dishwasher: true,
      washer_dryer_in_unit: true,
      has_pool: false,
      has_parking: true,
      image: 'https://d2k4yjfecjwzua.cloudfront.net/F9559CB5-EEAE-4EF0-A850-B150A28D94E1/197991_ProfileBig.jpg',
      address: {},
      location: {
        coordinates: [30.2672, -97.7431]
      },
      _id: 'roomid1'
    },
    {
      monthly_rent: 765,
      deposit: 500,
      title: 'Room title',
      description: 'Raclette bespoke hella tacos 8-bit chia everyday carry. Chartreuse food truck celiac, twee edison bulb kitsch occupy tilde cold-pressed. Offal trust fund waistcoat pop-up man braid. Hell of cronut plaid VHS tattooed. Cronut venmo pug, dreamcatcher forage selfies vice hella mustache sriracha aesthetic kogi church-key XOXO brunch. Bitters +1 intelligentsia pug. Helvetica vinyl narwhal dreamcatcher, austin vexillologist copper mug you probably haven\'t heard of them.',
      square_footage: 123,
      number_of_rooms: 2,
      number_of_bathrooms: 1,
      has_yard: false,
      has_dishwasher: true,
      washer_dryer_in_unit: true,
      has_pool: false,
      has_parking: true,
      image: 'https://d2k4yjfecjwzua.cloudfront.net/F9559CB5-EEAE-4EF0-A850-B150A28D94E1/197991_ProfileBig.jpg',
      address: {},
      location: {
        coordinates: [30.2672, -97.7431]
      },
      _id: 'roomid2'
    },
    {
      monthly_rent: 765,
      deposit: 500,
      title: 'Room title',
      description: 'Raclette bespoke hella tacos 8-bit chia everyday carry. Chartreuse food truck celiac, twee edison bulb kitsch occupy tilde cold-pressed. Offal trust fund waistcoat pop-up man braid. Hell of cronut plaid VHS tattooed. Cronut venmo pug, dreamcatcher forage selfies vice hella mustache sriracha aesthetic kogi church-key XOXO brunch. Bitters +1 intelligentsia pug. Helvetica vinyl narwhal dreamcatcher, austin vexillologist copper mug you probably haven\'t heard of them.',
      square_footage: 123,
      number_of_rooms: 2,
      number_of_bathrooms: 1,
      has_yard: false,
      has_dishwasher: true,
      washer_dryer_in_unit: true,
      has_pool: false,
      has_parking: true,
      image: 'https://d2k4yjfecjwzua.cloudfront.net/F9559CB5-EEAE-4EF0-A850-B150A28D94E1/197991_ProfileBig.jpg',
      address: {},
      location: {
        coordinates: [30.2672, -97.7431]
      },
      _id: 'roomid3'
    },
    {
      monthly_rent: 765,
      deposit: 500,
      title: 'Room title',
      description: 'Raclette bespoke hella tacos 8-bit chia everyday carry. Chartreuse food truck celiac, twee edison bulb kitsch occupy tilde cold-pressed. Offal trust fund waistcoat pop-up man braid. Hell of cronut plaid VHS tattooed. Cronut venmo pug, dreamcatcher forage selfies vice hella mustache sriracha aesthetic kogi church-key XOXO brunch. Bitters +1 intelligentsia pug. Helvetica vinyl narwhal dreamcatcher, austin vexillologist copper mug you probably haven\'t heard of them.',
      square_footage: 123,
      number_of_rooms: 2,
      number_of_bathrooms: 1,
      has_yard: false,
      has_dishwasher: true,
      washer_dryer_in_unit: true,
      has_pool: false,
      has_parking: true,
      image: 'https://d2k4yjfecjwzua.cloudfront.net/F9559CB5-EEAE-4EF0-A850-B150A28D94E1/197991_ProfileBig.jpg',
      address: {},
      location: {
        coordinates: [30.2672, -97.7431]
      },
      _id: 'roomid4'
    },
    {
      monthly_rent: 765,
      deposit: 500,
      title: 'Room title',
      description: 'Raclette bespoke hella tacos 8-bit chia everyday carry. Chartreuse food truck celiac, twee edison bulb kitsch occupy tilde cold-pressed. Offal trust fund waistcoat pop-up man braid. Hell of cronut plaid VHS tattooed. Cronut venmo pug, dreamcatcher forage selfies vice hella mustache sriracha aesthetic kogi church-key XOXO brunch. Bitters +1 intelligentsia pug. Helvetica vinyl narwhal dreamcatcher, austin vexillologist copper mug you probably haven\'t heard of them.',
      square_footage: 123,
      number_of_rooms: 2,
      number_of_bathrooms: 1,
      has_yard: false,
      has_dishwasher: true,
      washer_dryer_in_unit: true,
      has_pool: false,
      has_parking: true,
      image: 'https://d2k4yjfecjwzua.cloudfront.net/F9559CB5-EEAE-4EF0-A850-B150A28D94E1/197991_ProfileBig.jpg',
      address: {},
      location: {
        coordinates: [30.2672, -97.7431]
      },
      _id: 'roomid5'
    }],
    isLoading: false
  },
  profiles: {
    data: [{
      email: "mbetz08@cmc.edu",
      first_name: "Mickie",
      last_name: "Betz",
      age: 24,
      image_url: "https://assets.entrepreneur.com/content/16x9/822/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg",
      is_smoker: false,
      has_pets: true,
      has_children: false,
      lgbtq_friendly: true,
      sex: "female",
      relationship_status: "single",
      temperament: "extrovert"
    }],
    isLoading: false
  },
  pereferences: {
    data: [{
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
    }],
    isLoading: false
  }
}

export default store
