import { IllustrationNoContent } from "@/components/illustrations";
import { BlogListItem } from "./blog-list-item";

export type BlogType = {
  productId: number;
  bgImgPath1: string;
  bgImgPath2: string;
  title?: string;
  description: string;
  link: string;
}

type BlogListProps = {
  blogs: BlogType[];
};

export const BlogList = async ({ blogs }: BlogListProps) => {
  if (!blogs.length) {
    return (
      <div className="grid place-content-center gap-8">
        <IllustrationNoContent className="size-[30vh]" />
        <h3 className="text-center text-2xl font-semibold tracking-tight">
          Empty
        </h3>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-5">
      {blogs.map((el, idx) => (
        <li
          key={idx}
        >
          <BlogListItem blog={el} />
        </li>
      ))}
    </ul>
  );
};
