import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  useMutation,
  gql
} from '@apollo/client';

const ADD_PRODUCT = gql`
  mutation addProduct($name: String!, $price: Float!) {
    addProduct(product: {
      name: $name 
      price: $price
    }){
      id
      name
      price
    }
  }
`

const PRODUCT_QUERY = gql` 
query allProducts{
  products{
    id
    name
    price
  }
}
`;
const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: ID!, $name: String, $price: Float){
    updateProduct(product: {
      id: $id
      name: $name
      price: $price
    }){
      id
      name
      price
    }
  }
`;
const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!){
    deleteProduct(product:{
      id: $id
    }){
      id
      name
      price
    }
  }
`;