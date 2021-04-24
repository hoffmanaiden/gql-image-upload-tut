import Product from '../../models'

// ---------------------------------- Resolvers (Query Responders)
const resolvers = {
  Query: {
    products: async () => {
      try {
        const allProducts = await Product.find();
        return allProducts;
      } catch (err) {
        console.log('err', err);
        return []
      }
    },
    product: async (obj, args, context, info) => {
      try {
        const foundProduct = await Product.findById(args.id)
        return foundProduct
      } catch (err) {
        console.log('err', err);
        return {}
      }
    }
  },
  Mutation: {
    addProduct: async (obj, { product }, context, info) => {
      try {
        await Product.create({
          ...product
        })
        const allProducts = await Product.find();
        return allProducts
      } catch (err) {
        console.log('error', err);
      }
    },
    updateProduct: async (obj, args, context, info) => {
      try {
        console.log(args)
        const foundProduct = await Product.findById(args.product.id);
        await foundProduct.updateOne({
          ...args.product
        })
        const updatedProds = await Product.find();
        return updatedProds;
      } catch (err) {
        console.log('error', err)
      }
    },
    deleteProduct: async (obj, args, context, info) => {
      try {
        console.log(args)
        const foundProduct = await Product.findById(args.product.id)
        await foundProduct.deleteOne({id: args.product.id})
        const updatedProdList = await Product.find();
        return updatedProdList;
      } catch (err) {
        console.log('error', err)
      }
    }
  }
}

export default [resolvers];