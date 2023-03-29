module.exports = ({ env }) => ({
  'fuzzy-search': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::product.product',
          modelName: 'product',
          queryConstraints: {
            where: {
              $and: [
                {
                  price: { $not: 0 }
                }
              ]
            }
          },
          fuzzysortOptions: {
            characterLimit: 100,
            threshold: -1000,
            limit: 10,
            keys: [
              {
                name: 'Name',
                weight: 100
              }
            ]
          }
        }
      ]
    }
  }
})
