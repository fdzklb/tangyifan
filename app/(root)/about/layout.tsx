import * as React from "react";

// export async function generateMetadata({ params }: { params: { lang: string } }) {
//   const { lang } = await params
//   return {
//     title: dict.paths.site_about.label, 
//     description: dict.paths.site_about.description,
//   };
// }

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
