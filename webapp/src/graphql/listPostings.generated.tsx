import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type ListPostingsQueryVariables = {};

export type ListPostingsQuery = { __typename?: "query_root" } & {
  postings: Array<
    { __typename?: "postings" } & Pick<
      Types.Postings,
      "name" | "id" | "author_name"
    >
  >;
};

export const ListPostingsDocument = gql`
  query listPostings {
    postings {
      name
      id
      author_name
    }
  }
`;

export function useListPostingsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ListPostingsQuery,
    ListPostingsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    ListPostingsQuery,
    ListPostingsQueryVariables
  >(ListPostingsDocument, baseOptions);
}
export type ListPostingsQueryHookResult = ReturnType<
  typeof useListPostingsQuery
>;
export type ListPostingsQueryResult = ApolloReactCommon.QueryResult<
  ListPostingsQuery,
  ListPostingsQueryVariables
>;
