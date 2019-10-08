import gql from "graphql-tag";

export const CreatePosting = gql`
  mutation createPosting($posting: [postings_insert_input!]!) {
    insert_postings(objects: $posting) {
      affected_rows
      returning {
        id
        slug
      }
    }
  }
`;
export const GetGame = gql`
  query getGame($gameId: Int!) {
    postings_by_pk(id: $gameId) {
      author_icon
      author_name
      author_url
      description
      created_at
      fields
      id
      name
      slug
      updated_at
    }
  }
`;
export const ListPostings = gql`
  query listPostings {
    postings {
      name
      id
      author_name
    }
  }
`;
export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: []
  }
};

export default result;
