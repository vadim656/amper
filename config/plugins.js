module.exports = ({ env }) => ({
    'import-export-entries': {
      enabled: false,
    },
    "rest-cache": {
        config: {
          provider: {
            name: "memory",
            options: {
              max: 32767,
              maxAge: 600,
            },
          },
          strategy: {
            contentTypes: [
              // list of Content-Types UID to cache
              "api::product.product",

            ],
          },
        },
      },

  });