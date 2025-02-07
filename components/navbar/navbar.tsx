import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { NextLink } from "../next-link";
import { NavbarScroll } from "./navbar-scroll";
import { Button } from "../ui/button";
import { menus } from '@/constants'

// 服务端组件
export const Navbar = async () => {
  return (
    <NavbarScroll>
      <div className="flex justify-around h-16 w-full items-center p-4 sm:p-8 md:max-w-screen-md 2xl:max-w-screen-lg">
        <div className="flex items-center justify-center">
          <NextLink
            href={"/"}
            className={cn("mr-4 hidden sm:flex")}
            aria-label={"Gewinda"}
          >
            <span className="ml-2 text-2xl font-serif font-semibold text-gray-900">
              Gewinda
            </span>
          </NextLink>
        </div>
        <div className="hidden h-16 items-center text-base font-medium sm:flex">
          {menus.map((el: any) => (
            <div
              key={el.link}
              className="hover:text-gray-600 px-8 text-gray-800 text-sm transition-colors"
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
            className={cn("hidden sm:flex")}
            aria-label={"Gewinda"}
          >
            <Button className="hvr-sweep-to-right">CONTACT US</Button>
          </NextLink>
        </div>
        {/* <MobileNav /> */}
      </div>
    </NavbarScroll>
  );
};
