import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NextLink } from "../next-link";
import { NavbarScroll } from "./navbar-scroll";
import { Button } from "../ui/button";
import { menus } from '@/constants'

// 服务端组件
export const Navbar = async () => {
  return (
    <NavbarScroll>
      <div className="flex justify-around sm:gap-8 md:gap-12 h-16 w-full items-center p-2 sm:p-8 md:max-w-screen-md 2xl:max-w-screen-lg">
        <div className="flex items-center justify-center">
          <NextLink
            href={"/"}
            className={cn("")}
            aria-label={"Gewinda"}
          >
            <span className="sm:text-2xl text-xl font-serif font-semibold text-gray-900">
              Gewinda
            </span>
          </NextLink>
        </div>
        <div className="h-16 items-center text-base sm:font-medium flex gap-2 sm:gap-8 md:gap-16">
          {menus.map((el: any) => (
            <div
              key={el.link}
              className="hover:text-gray-600 text-gray-800 text-sm transition-colors"
            >
              <Link href={el.link} className={"hvr-underline-from-center py-2"}>
                <span>{el.label}</span>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <NextLink
            href={"/contact"}
            aria-label={"Gewinda"}
          >
            <Button className="hvr-sweep-to-right">CONTACT US</Button>
          </NextLink>
        </div>
      </div>
    </NavbarScroll>
  );
};
