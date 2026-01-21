import React from "react";
import Section from "../Section";
import BlogCards from "./BlogCards/BlogCards";
import { fetchVelogPost } from "@/lib/velog";

const BlogPostSection = async () => {
  const posts = await fetchVelogPost();
  return (
    <Section id="blog" className="section section__blog">
      <h3 className="section__title">블로그</h3>
      <BlogCards posts={posts} />
    </Section>
  );
};

export default BlogPostSection;
