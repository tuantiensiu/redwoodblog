export const schema = gql`
  type User {
    id: Int!
    name: String!
    region: Int!
    createdAt: DateTime!
  }

  type Query {
    users(region: Int): [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String!
    region: Int!
  }

  input UpdateUserInput {
    name: String
    region: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
