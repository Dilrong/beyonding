import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Layout>
        <section className="flex flex-row items-center mx-auto max-w-screen-xl text-neutral-50"></section>
      </Layout>
    </>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
