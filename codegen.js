// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv')
dotenv.config()

const { SERVICE_SECRET, HASURA_ENDPOINT } = process.env

module.exports = (async () => {
  return {
    schema: [
      {
        [`${HASURA_ENDPOINT}/v1/graphql`]: {
          headers: {
            'x-hasura-admin-secret': SERVICE_SECRET
          }
        }
      }
    ],
    overwrite: true,
    // hooks: {
    //   afterAllFileWrite: "prettier --write",
    // },
    generates: {
      './types/generated.d.ts': {
        plugins: ['typescript'],
        config: {
          skipTypename: false,
          noExport: true,
          declarationKind: 'interface',
          constEnums: false,
          namingConvention: {
            typeNames: 'change-case#pascalCase'
          }
        }
      },
      './types/generated.ts': {
        plugins: ['typescript'],
        config: {
          skipTypename: false,
          noExport: false,
          declarationKind: 'interface',
          constEnums: true,
          namingConvention: {
            typeNames: 'change-case#pascalCase'
          }
        }
      }
    }
  }
})()
