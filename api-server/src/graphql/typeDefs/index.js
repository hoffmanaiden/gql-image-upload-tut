import {gql} from 'apollo-server-express';

// ----------------------------- GraphQl Schema
const typeDefs = gql`
  type Product {
    id: ID
    name: String
    price: Float
    img: String
  }
  type Query {
    product(id: ID): Product
    products: [Product]
  }
  input ProductInput {
    id: ID
    name: String
    price: Float
    img: String
  }
  type Mutation {
    addProduct(product: ProductInput): [Product]
    updateProduct(product: ProductInput): [Product]
    deleteProduct(product: ProductInput): [Product]
  }
`;

export default [typeDefs];