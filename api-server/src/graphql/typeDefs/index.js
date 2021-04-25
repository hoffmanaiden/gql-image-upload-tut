import {gql} from 'apollo-server-express';

// ----------------------------- GraphQl Schema
const typeDefs = gql`
  type Product {
    id: ID
    name: String
    price: Float
    img: Upload
  }
  type Query {
    product(id: ID): Product
    products: [Product]
    info: String!

  }
  input ProductInput {
    id: ID
    name: String
    price: Float
    img: Upload
  }
  type Mutation {
    addProduct(product: ProductInput): [Product]
    updateProduct(product: ProductInput): [Product]
    deleteProduct(product: ProductInput): [Product]
    imageUploader(file: Upload!): String
  }
`;

export default [typeDefs];