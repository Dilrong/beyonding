import * as React from "react";
import { graphql, Link, type PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface IBlog {
  name: string;
}

const BlogPage: React.FC<PageProps> = ({ data }) => {
  return (
    <>
      {console.log(data)}
      <Layout>
        <section className="flex flex-row items-center mx-auto max-w-screen-xl text-neutral-50">
          {data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.slug}</p>
            </article>
          ))}
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title="Blog Page" />;

export default BlogPage;
