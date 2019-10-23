import React, { FunctionComponent } from "react";
import { IBreadcrumbProps, Card, HTMLTable, Button } from "@blueprintjs/core";
import {
  useListPostingsQuery,
  ListPostingsQuery
} from "../../graphql/listPostings.generated";
import { oc } from "ts-optchain";
import { useLinkProps } from "react-navi";
import SeteshBreadcrumbs from "../../molecules/Breadcrumbs";

const BREADCRUMBS: IBreadcrumbProps[] = [
  { href: "/", text: "Home" },
  { href: "/games", text: "Games" }
];
const PostingListBodyItem: FunctionComponent<
  ListPostingsQuery["postings"][0]
> = ({ name, author_name, id }) => {
  let linkProps = useLinkProps({ href: `${id}` }) as Omit<
    ReturnType<typeof useLinkProps>,
    "onClick"
  > & {
    onClick: (event: React.MouseEvent<any, MouseEvent>) => void;
  };

  return (
    <tr {...linkProps}>
      <td>{name}</td>
      <td>{author_name}</td>
    </tr>
  );
};

const PostingsListPage = () => {
  const { data } = useListPostingsQuery();
  const createGameLink = useLinkProps({ href: "create" }) as Omit<
    ReturnType<typeof useLinkProps>,
    "onClick"
  > & {
    onClick: (event: React.MouseEvent<any, MouseEvent>) => void;
  };

  return (
    <div style={{ maxWidth: 500, margin: "24px auto" }}>
      <SeteshBreadcrumbs items={BREADCRUMBS} />
      <Card>
        <Button {...createGameLink}>Create a game</Button>
        <HTMLTable interactive>
          <thead>
            <tr>
              <th>Game Name</th>
              <th>GM</th>
            </tr>
          </thead>
          <tbody>
            {oc(data)
              .postings([])
              .map(posting => (
                <PostingListBodyItem key={posting.id} {...posting} />
              ))}
          </tbody>
        </HTMLTable>
      </Card>
    </div>
  );
};

export default PostingsListPage;
