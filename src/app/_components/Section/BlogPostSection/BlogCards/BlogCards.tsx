"use client";

import React, { useCallback, useMemo, useState } from "react";
import { VelogPost } from "@/types/velog.types";
import LiquidGlass from "@/app/_components/LiquidGlass/LiquidGlass";
import BlogCard from "../BlogCard/BlogCard";
import "./blog-cards.scss";
import Link from "next/link";

interface BlogCardsProps {
  posts: VelogPost[];
}

const MIN_DISPLAY_COUNT = 3;
const MAX_DISPLAY_COUNT = 9;

const BlogCards = ({ posts }: BlogCardsProps) => {
  const [displayCount, setDisplayCount] = useState(
    Math.min(posts.length, MIN_DISPLAY_COUNT)
  );
  const [hasMore, setHasMore] = useState(posts.length > displayCount);

  const canShowMore = useMemo(
    () => displayCount < MAX_DISPLAY_COUNT,
    [displayCount]
  );

  const handleShowMore = useCallback(() => {
    if (!canShowMore) return;
    setDisplayCount((prev) =>
      Math.min(prev + MIN_DISPLAY_COUNT, MAX_DISPLAY_COUNT)
    );
  }, [displayCount, hasMore]);

  if (posts.length === 0) {
    return <div>게시물이 없습니다.</div>;
  }
  return (
    <div className="blog__cards-container">
      <div className="blog__cards">
        {posts.slice(0, displayCount).map((post) => (
          <BlogCard key={post.link} {...post} />
        ))}
      </div>
      {canShowMore && (
        <button className="blog__card-more-button" onClick={handleShowMore}>
          <LiquidGlass className="blog__card-more-button-inner">
            더 보기
          </LiquidGlass>
        </button>
      )}
      {!canShowMore && (
        <Link
          href={`${process.env.NEXT_PUBLIC_BLOG_URL}/@${process.env.NEXT_PUBLIC_BLOG_USERNAME}`}
          className="blog__card-more-button"
          target="_blank"
        >
          <LiquidGlass className="blog__card-more-button-inner">
            블로그 바로가기
          </LiquidGlass>
        </Link>
      )}
    </div>
  );
};

export default BlogCards;
