import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextLink } from "../next-link";
import { BlogType } from "./blog-list";
import { cn } from "@/lib/utils";

type BlogListItemProps = {
  blog: BlogType;
};

export const BlogListItem = async ({ blog }: BlogListItemProps) => {
  return (
    <div className="bg-slate-50 p-3 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-500 ease-in-out">
      <Link href={`/products/${blog.productId}`} className={cn("group flex")}>
        <div className="relative rounded-sm transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200">
          <Image
            src={blog.bgImgPath1}
            alt={"博客背景图片"}
            width={900}
            height={600}
            className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          />
            <Image
              src={blog.bgImgPath2}
              alt={"博客背景图片"}
              width={900}
              height={600}
              className={cn(
                "inset-0 absolute object-cover opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
              )}
            />
        </div>
      </Link>
      <Link href={`/products/${blog.productId}`} className={cn("group flex")}>
        <div className="flex flex-col my-2 space-y-2">
          <div className="flex justify-between">
            <h2 className="text-xl text-gray-700">
              {blog.title}
            </h2>
          </div>
          <p className="w-full flex-none text-base text-gray-700">
            {blog.description}
          </p>
        </div>
      </Link>
    </div>
  );
};
