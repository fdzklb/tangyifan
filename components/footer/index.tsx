"use client";

import { IconBrandGithub } from "../icons";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { SocialMediaList } from "@/features/home/compoents/social-media";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { createSubscriber } from "@/lib/actions";
import { useActionState } from "react";
import { Wrapper } from "../wrapper";
import { menus } from "@/constants";

import {
  Rss,
  Twitter,
  Command,
  ArrowRight,
  Icon as LucidIcon,
  LucideProps,
} from "lucide-react";

export const Footer = () => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch, isPending] = useActionState(
    createSubscriber,
    initialState
  );

  return (
    <footer className="px-6 pb-12 bg-gray-900 text-gray-400">
      <Wrapper className="flex flex-col items-center justify-center space-y-1 pt-12 text-sm md:flex-row md:space-x-4 md:space-y-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="space-y-4">
              <h3 className="text-md font-semibold">Menu</h3>
              <ul className="space-y-2 text-sm">
                {menus.map((el: any) => (
                  <div
                    key={el.link}
                    className="hover:text-gray-400"
                  >
                    <Link
                      href={el.link}
                      className={"py-2 hover:text-gray-700"}
                    >
                      <span>{el.label}</span>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-md font-semibold">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:w3tsadev@gmail.com"
                    className="text-gray-400 hover:text-gray-700"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link
                    href="/terms-of-services"
                    className="text-gray-400 hover:text-gray-700"
                  >
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-gray-700"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap.xml"
                    className="text-gray-400 hover:text-gray-700"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-gray-400 text-lg">
                Do you want to be the first to learn our latest news?
              </p>
              <form action={dispatch}>
                <div className="flex space-x-2 w-80">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="flex-1"
                    defaultValue=""
                    aria-describedby="email-error"
                  />
                  <Button type="submit" disabled={isPending}>
                    <ArrowRight />
                  </Button>
                </div>
                <div
                  id="email-error"
                  aria-label="polite"
                  aria-atomic="true"
                  className="px-1"
                >
                  {state?.errors?.email &&
                    state.errors.email.map((error: string) => (
                      <p key={error} className="text-xs text-red-500">
                        {error}
                      </p>
                    ))}
                  {!state?.errors?.email && (
                    <p className="text-xs text-green-500">{state?.message}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
            &copy; 2025 Coding Gewind. All rights reserved.
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
