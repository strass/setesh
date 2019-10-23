import * as Types from "./types.generated";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type CreatePostingMutationVariables = {
  posting: Array<Types.Postings_Insert_Input>;
};

export type CreatePostingMutation = { __typename?: "mutation_root" } & {
  insert_postings: Types.Maybe<
    { __typename?: "postings_mutation_response" } & Pick<
      Types.Postings_Mutation_Response,
      "affected_rows"
    > & {
        returning: Array<
          { __typename?: "postings" } & Pick<Types.Postings, "id" | "slug">
        >;
      }
  >;
};

export const CreatePostingDocument = gql`
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

export function useCreatePostingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreatePostingMutation,
    CreatePostingMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreatePostingMutation,
    CreatePostingMutationVariables
  >(CreatePostingDocument, baseOptions);
}
export type CreatePostingMutationHookResult = ReturnType<
  typeof useCreatePostingMutation
>;
export type CreatePostingMutationResult = ApolloReactCommon.MutationResult<
  CreatePostingMutation
>;
export type CreatePostingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreatePostingMutation,
  CreatePostingMutationVariables
>;
