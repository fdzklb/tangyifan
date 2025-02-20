import { IllustrationNoContent } from "@/components/illustrations";
import { BlogListItem } from "./blog-list-item";

export type BlogType = {
  productId: number;
  title?: string;
  description: string;
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
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5">
      {blogs.map((el, idx) => 
      {
        return (
          <li
            key={el.productId}
          >
            <BlogListItem blog={el} />
          </li>
        )
      }
      )}
    </ul>
  );
};
