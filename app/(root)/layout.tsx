import type { Metadata } from "next";
import * as React from "react";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang={"en"}>
      <body className="debug-screens overflow-x-clip scroll-smooth">
        <TooltipProvider>
          <>
            <Navbar />
            <main className="min-h-[calc(100vh-64px)]">{children}</main>
            <Footer />
            <BackToTop />
          </>
        </TooltipProvider>
      </body>
    </html>
  );
}
