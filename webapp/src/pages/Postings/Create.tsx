import React from "react";
import LoginStatusOrganism from "../../organisms/LoginStatus";
import CreatePostingForm from "../../organisms/CreatePostingForm";
import { IBreadcrumbProps } from "@blueprintjs/core";
import SeteshBreadcrumbs from "../../molecules/Breadcrumbs";

const BREADCRUMBS: IBreadcrumbProps[] = [
  { href: "/", text: "Home" },
  { href: "/games", text: "Games" },
  { href: "/games/create", text: "Create Listing" }
];

const PostingCreatePage = () => {
  return (
    <div style={{ maxWidth: 500, margin: "24px auto" }}>
      <SeteshBreadcrumbs items={BREADCRUMBS} />
      <LoginStatusOrganism />
      <CreatePostingForm />
    </div>
  );
};

export default PostingCreatePage;
