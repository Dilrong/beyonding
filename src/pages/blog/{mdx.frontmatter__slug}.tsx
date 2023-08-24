import * as React from "react";
import { graphql, type PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const BlogPost: React.FC<PageProps> = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <>
      <Layout>
        <section className="flex flex-row items-center mx-auto max-w-screen-xl text-neutral-50">
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>{data.mdx.frontmatter.date}</p>
          {children}
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
