import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextLink } from "../next-link";
import { BlogType } from "./blog-list";
import { cn } from "@/lib/utils";
import { getProductImagePath } from "@/lib/resolveMarkdown";
import "./style.css";
import ContainImage from "../containImage";

type BlogListItemProps = {
  blog: BlogType;
};

export const BlogListItem = async ({ blog }: BlogListItemProps) => {
  const imgs = await getProductImagePath(blog.productId);
  return (
    <div className="bg-slate-50 p-3 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-500 ease-in-out">
      <Link href={`/products/${blog.productId}`} className={cn("group flex")}>
        <div className="relative rounded-sm transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200">
          {imgs && imgs.length > 0 && (
            <div className="flip-card">
              <div className="flip-face flip-front">
                <ContainImage src={imgs[0]} alt={blog.title} maxWidth={400} maxHeight={400} />
              </div>
              <div className="flip-face flip-back">
                <ContainImage src={imgs[1]} alt={blog.title} maxWidth={400} maxHeight={400} />
              </div>
            </div>
          )}
        </div>
      </Link>
      <Link href={`/products/${blog.productId}`} className={cn("group flex")}>
        <div className="flex flex-col my-2 space-y-2 group-hover:underline text-gray-700 group-hover:text-gray-800">
          <div className="flex justify-between">
            <h2 className="text-lg">{blog.title}</h2>
          </div>
          <p className="w-full flex-none text-base">{blog.description}</p>
        </div>
      </Link>
    </div>
  );
};
