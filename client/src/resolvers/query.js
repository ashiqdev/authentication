import gql from 'graphql-tag';

export const USER_QUERY = gql `
 query USER($id: ID!) {
    user(id: $id) {
      email
    }
  }

`;