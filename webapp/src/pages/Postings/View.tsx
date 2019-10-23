import React, { FunctionComponent, Fragment } from "react";
import { Card, IBreadcrumbProps, H2, H1, Text } from "@blueprintjs/core";
import SeteshBreadcrumbs from "../../molecules/Breadcrumbs";
import { useGetGameQuery } from "../../graphql/getPosting.generated";
import { oc } from "ts-optchain";
import { toNumber } from "lodash";
import { SKELETON } from "@blueprintjs/core/lib/esm/common/classes";

const BREADCRUMBS: IBreadcrumbProps[] = [
  { href: "/", text: "Home" },
  { href: "/games", text: "Games" }
];

const PostingViewPage: FunctionComponent<{ gameId: string }> = ({ gameId }) => {
  const { data, loading } = useGetGameQuery({
    variables: { gameId: toNumber(gameId) }
  });

  const avatarURL = oc(data).postings_by_pk.author_icon();

  return (
    <div style={{ maxWidth: 500, margin: "24px auto" }}>
      <SeteshBreadcrumbs
        items={[
          ...BREADCRUMBS,
          {
            href: `/games/${gameId}`,
            text: (
              <span className={loading ? SKELETON : ""}>
                {oc(data).postings_by_pk.name("View Game")}
              </span>
            )
          }
        ]}
      />
      <Card>
        <H1 className={loading ? SKELETON : ""}>
          {oc(data).postings_by_pk.name("Error loading name")}
        </H1>
        <H2 className={loading ? SKELETON : ""}>
          {avatarURL && (
            <img
              src={`${avatarURL}?size=32`}
              alt="discord icon"
              style={{ borderRadius: "50%", width: 32, height: 32 }}
            />
          )}
          {oc(data).postings_by_pk.author_name("Error loading author")}
        </H2>
        <Text className={loading ? SKELETON : ""}>
          {oc(data).postings_by_pk.description("Error loading description")}
        </Text>
        <dl
          style={{
            display: "flex",
            flexFlow: "row wrap",
            border: "solid #333",
            borderWidth: "1px 1px 0 0"
          }}
        >
          {(oc(data).postings_by_pk.fields([]) as {
            name: string;
            value: string;
          }[]).map(({ name, value }, i) => (
            <Fragment key={i}>
              <dt
                style={{
                  flexBasis: "20%",
                  padding: "2px 4px",
                  background: "#333",
                  textAlign: "right",
                  color: "#fff"
                }}
              >
                {name}
              </dt>
              <dd
                style={{
                  flexBasis: "70%",
                  flexGrow: 1,
                  margin: 0,
                  padding: "2px 4px",
                  borderBottom: "1px solid #333"
                }}
              >
                {value}
              </dd>
            </Fragment>
          ))}
        </dl>
      </Card>
    </div>
  );
};

export default PostingViewPage;
