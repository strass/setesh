import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type GetGameQueryVariables = {
  gameId: Types.Scalars["Int"];
};

export type GetGameQuery = { __typename?: "query_root" } & {
  postings_by_pk: Types.Maybe<
    { __typename?: "postings" } & Pick<
      Types.Postings,
      | "author_icon"
      | "author_name"
      | "author_url"
      | "description"
      | "created_at"
      | "fields"
      | "id"
      | "name"
      | "slug"
      | "updated_at"
    >
  >;
};

export const GetGameDocument = gql`
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

export function useGetGameQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetGameQuery,
    GetGameQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetGameQuery, GetGameQueryVariables>(
    GetGameDocument,
    baseOptions
  );
}
export type GetGameQueryHookResult = ReturnType<typeof useGetGameQuery>;
export type GetGameQueryResult = ApolloReactCommon.QueryResult<
  GetGameQuery,
  GetGameQueryVariables
>;
