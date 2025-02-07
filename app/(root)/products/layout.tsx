import * as React from "react";

// export async function generateMetadata({
// }: {
// }) {
//   return {
//     title: dict.paths.site_category.label,
//     description: dict.paths.site_category.description,
//   };
// }

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
