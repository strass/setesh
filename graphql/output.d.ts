declare module "*/createPosting.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const createPosting: DocumentNode;

  export default defaultDocument;
}

declare module "*/getPosting.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const getGame: DocumentNode;

  export default defaultDocument;
}

declare module "*/listPostings.graphql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const listPostings: DocumentNode;

  export default defaultDocument;
}
