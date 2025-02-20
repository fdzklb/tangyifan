import * as React from "react";
import ipa from "@/public/imgs/deskop.jpg";
import mob from "@/public/imgs/deskop1.jpg";
import Image from "next/image";
import { getImageProps } from "next/image";
import { BlogList } from "@/components/blog/blog-list";
import Advantages from "@/components/advantages";
import { description, products, showOnHomeIds } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
// 添加类型声明
export default async function Page() {
  const common = { alt: "Art Direction Example", sizes: "100vw" };
  // const {
  //   props: { srcSet: desktop },
  // } = getImageProps({
  //   ...common,
  //   width: 1440,
  //   height: 875,
  //   quality: 100,
  //   src: desk,
  // });
  const {
    props: { srcSet: ipad },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1024,
    quality: 100,
    // src: ipa,
    src: ipa,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 640,
    height: 1334,
    quality: 100,
    src: mob,
  });

  return (
    <div className="w-full font-serif bg-slate-100 gap-10">
      <div className="relative flex justify-center w-full text-gray-100">
        <picture>
          <source media="(min-width: 640px)" srcSet={ipad} />
          <source media="(min-width: 300px)" srcSet={mobile} />
          {/* <source media="(min-width: 1000px)" srcSet={desktop} />
          <source media="(min-width: 640px)" srcSet={ipad} />
          <source media="(min-width: 300px)" srcSet={mobile} /> */}
          <img
            {...rest}
            style={{ width: "100%", objectFit: "cover" }}
            alt={rest.alt || ""}
          />
        </picture>
        {/* <Image src={desktop} alt="img" className="min-h-[calc(100vh-64px)] w-full" /> */}
        {/* <Image
          src={'/imgs/deskop.jpg'}
          // src={desktop}
          alt={"gewinda"}
          // layout="responsive"
          width={800} // 图片的原始宽度
          height={600} // 图片的原始高度
          // objectFit="contain" // 图片按比例缩放，适应容器
          className=" w-full"
        /> */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)", // 蒙层颜色和透明度
          }}
        />
        <div className="absolute flex flex-col gap-4 left-4 sm:left-6 md:left-12 lg:left-[10%] top-[30%]">
          <div
            className={cn(
              "flex md:gap-10 justify-center flex-col text-2xl md:text-4xl lg:text-6xl animate__animated animate__bounceInLeft"
            )}
          >
            <span>{description[0]}</span>
            <span className="lg:text-5xl">{description[1]}</span>
            {/* <span className="text-xl md:text-2xl lg:text-3xl">{description[1]}</span> */}
            {/* <span className="text-xl md:text-2xl lg:text-3xl">{description[2]}</span> */}
          </div>
          {/* <div className="text-2xl md:text-3xl lg:text-4xl animate__animated animate__bounceInUp animate__delay-1s">
            {description[3]}
          </div> */}
          {/* <div className="flex flex-col text-xl animate__animated animate__bounceInRight">
            <div>{"Creating timeless, made to last,"}</div>
            <div>
              {
                "faucet collections that beautify"
              }
            </div>
            <div>{"everyday life."}</div>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-col gap-6 w-[90%] my-8">
          <div className="text-center text-4xl text-gray-600">
            SOME PRODUCTS
            <Link href="/products">
              <span className="ml-3 text-2xl hover:underline hover:text-green-800">
                View All
              </span>
            </Link>
          </div>
          <div className="text-center text-2xl text-gray-600">
            OUR WATER FILTER COLLECTIONS
          </div>
        </div>
        <div className="flex justify-center w-[96%] md:w-[90%] lg:w-[85%] xl:w-[80%] text-lg my-4">
          <BlogList blogs={products} />
        </div>
      </div>
      <Advantages />
    </div>
  );
}
