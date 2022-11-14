module.exports = ({ env }) => ({
  'fuzzy-search': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::product.product',
          modelName: 'product',
          transliterate: true,
        //   queryConstraints: {
        //     where: {
        //       $and: [
        //         {
        //           publishedAt: { $notNull: true }
        //         }
        //       ]
        //     }
        //   },
          fuzzysortOptions: {
            characterLimit: 30,
            threshold: -100,
            limit: 15,
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
