import * as React from "react";
import { BlogList } from "@/components/blog/blog-list";
import { products } from '@/constants';
export default async function Page() {
  return (
    <div className="w-full font-serif bg-slate-100">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 xl:w-[75%] w-[90%] my-8">
          <div className="text-center text-5xl text-gray-600">All PRODUCTS</div>
          <div className="text-center text-2xl text-gray-600">
            ALL OF OUR FILTRATION PRODUCTS
          </div>
        </div>
        <div className="flex justify-center xl:w-[80%] w-[90%] text-lg my-8 mx-2">
          <BlogList blogs={products} />
        </div>
      </div>
    </div>
  );
}
