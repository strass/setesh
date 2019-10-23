import React, { FunctionComponent } from "react";
import {
  Breadcrumbs,
  IBreadcrumbsProps,
  IBreadcrumbProps,
  Breadcrumb
} from "@blueprintjs/core";
import { useLinkProps, useActive } from "react-navi";

const SeteshBreadcrumb: FunctionComponent<IBreadcrumbProps> = ({
  href,
  ...rest
}) => {
  const link = useLinkProps({ href: href as string }) as Omit<
    ReturnType<typeof useLinkProps>,
    "onClick"
  > & {
    onClick: (event: React.MouseEvent<any, MouseEvent>) => void;
  };
  const active = useActive(href as string);
  return <Breadcrumb {...rest} {...link} current={active} />;
};

const SeteshBreadcrumbs: FunctionComponent<IBreadcrumbsProps> = ({ items }) => (
  <Breadcrumbs
    items={items}
    breadcrumbRenderer={p => <SeteshBreadcrumb {...p} />}
  />
);

export default SeteshBreadcrumbs;
