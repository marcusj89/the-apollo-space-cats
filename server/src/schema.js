const gql = require('graphql-tag');

"""
Track Data Query fn
"""
const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  "Tracks render w/CSS Grids on the pg"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    "moodules in a track"
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
