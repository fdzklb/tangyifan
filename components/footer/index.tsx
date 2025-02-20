"use client";

import { IconBrandGithub } from "../icons";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { SocialMediaList } from "@/features/home/compoents/social-media";
import { createSubscriber } from "@/lib/actions";
import { useActionState } from "react";
import { Wrapper } from "../wrapper";
import { footMenus, footLinks } from "@/constants";

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
    <footer className="px-6 pb-12 bg-slate-700 text-gray-300">
      <Wrapper className="flex flex-col items-center justify-center space-y-1 pt-12 text-sm md:flex-row md:space-x-4 md:space-y-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="space-y-4">
              <h3 className="text-md font-semibold">Menu</h3>
              <ul className="space-y-2 text-lg">
                {footMenus.map((el: any) => (
                  <div key={el.link}>
                    <Link
                      href={el.link}
                      className={"py-2 text-gray-200 hover:text-gray-100"}
                    >
                      <span>{el.label}</span>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-md font-semibold">Links</h3>
              <ul className="space-y-2 text-lg">
                {footLinks.map((el) => (
                  <li key={el.link}>
                    <Link
                      href={el.link}
                      className="text-gray-200 hover:text-gray-100"
                    >
                      {el.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-xl">
                Do you want to be the first to learn our latest news?
              </p>
              <form action={dispatch}>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-50"
                    defaultValue=""
                    aria-describedby="email-error"
                  />
                  <Button type="submit" disabled={isPending} className="bg-slate-600 hover:bg-slate-400">
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
