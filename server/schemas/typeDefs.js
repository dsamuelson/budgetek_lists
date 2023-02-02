const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type ShoppingCategoriesT {
        name: String
        subcategory: [String]
    }

    type ShoppingEventsT {
        eventTitle: String
        eventCategory: String
        eventSubcategory: String
        eventValue: String
    }

    type User {
        _id: ID
        username: String
        email: String
        shoppingCategories: [ShoppingCategoriesT]
        shoppingEvents: [ShoppingEventsT]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        getSingleUser(username: String!): User
        getAllUsers: [User]
        user: User
    }

    type Mutation {
        createUser(email: String!, username: String!, password: String!): Auth
        login(username: String! password: String!): Auth
    }
`;

module.exports = typeDefs