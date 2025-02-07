"use client";

import { useState } from "react";
import Image from "next/image";
import useOnScreen from "../hooks/useOnScreen";
import { cn } from "@/lib/utils";

const advantages = [
  {
    img: "/imgs/cam2.webp",
    title: "REFINED OUTDOOR LUXURY",
    description: [
      "Gone are the days of rigid boundaries separating the two realms - instead, a new era of design has emerged. One that seamlessly integrates the comforts of indoor living with the beauty of the great outdoors. There's something undeniably magical about spending time outdoors - the fresh air, the sunshine, the soothing sounds of nature.",
    ],
  },
  {
    img: "/imgs/2.webp",
    title: "REFINED OUTDOOR LUXURY",
    description: [
      "Blurring the lines between indoor and outdoor living spaces has become more than a trend; it's now a widely embraced lifestyle.",
    ],
  },
  {
    img: "/imgs/1.webp",
    title: "REFINED OUTDOOR LUXURY",
    description: [
      "At Nth Degree, our design-led furniture collections provide endless oppportunities for customisation and creativity.",
    ],
  },
];

export default function Advantages() {
  // 用于存储每条评论的点赞状态
  const [ref1, isIntersecting1] = useOnScreen({ threshold: 0.5 });
  const [ref2, isIntersecting2] = useOnScreen({ threshold: 0.2 });
  const [ref3, isIntersecting3] = useOnScreen({ threshold: 0.2 });
  const [ref4, isIntersecting4] = useOnScreen({ threshold: 0.2 });

  const class1 = "flex flex-col gap-16 justify-center text-lg my-8 mx-2"
  const class2 = "opacity-0 w-full md:w-1/2 md:pt-16 flex flex-col md:align-center"
  const class3 = "w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out rounded-md"
  const class4 = "text-center text-3xl font-bold w-[80%] mx-auto"
  const class5 = "text-center text-2xl md:w-[80%] md:pt-6 mx-auto"

  return (
    <div className="w-full font-serif flex justify-center bg-[#E7E5E0] my-10 text-gray-600">
      <div className="flex flex-col items-center xl:w-[75%] w-[90%]">
        <div ref={ref1} className={cn("flex flex-col gap-8 my-8")}>
          <div
            className={cn(
              "text-center text-5xl text-gray-600 opacity-0",
              isIntersecting1
                ? "opacity-100 animate__animated animate__bounceInDown"
                : ""
            )}
          >
            ADVANTAGES
          </div>
          <div
            className={cn(
              "text-center text-2xl text-gray-600 opacity-0",
              isIntersecting1
                ? "opacity-100 animate__animated animate__bounceInUp animate-delay-500"
                : ""
            )}
          >
            STRONG SUPPLY CHAIN AND DIRECTLY OPERATED FACTORIES
          </div>
        </div>
        <div
          ref={ref2}
          className={class1}
        >
          <div className={"flex gap-4 w-full flex-col md:flex-row"}>
            <div
              className={cn(
                "opacity-0 w-full md:w-1/2 mx-auto",
                isIntersecting2
                  ? "opacity-100 animate__bounceInLeft animate__animated"
                  : ""
              )}
            >
              <Image
                src={advantages[0].img}
                alt={"img"}
                width={600}
                height={900}
                // fill={true}
                className={class3}
              />
            </div>
            <div
              className={cn(
                class2,
                isIntersecting2
                  ? 'opacity-100 animate__bounceInRight animate__animated' : ""
              )}
            >
              <div className={class4}>
                {advantages[0].title}
              </div>
              <div className={class5}>
                {advantages[0].description[0]}
              </div>
            </div>
          </div>
        </div>
        <div
          ref={ref3}
          className={class1}
        >
          <div className={"flex gap-4 w-full flex-col md:flex-row-reverse"}>
            <div
              className={cn(
                "opacity-0 w-full md:w-1/2 mx-auto",
                isIntersecting3
                  ? "opacity-100 animate__bounceInRight animate__animated"
                  : ""
              )}
            >
              <Image
                src={advantages[1].img}
                alt={"img"}
                width={600}
                height={900}
                // fill={true}
                className={class3}
              />
            </div>
            <div
              className={cn(
                class2,
                isIntersecting3
                  ? 'opacity-100 animate__bounceInLeft animate__animated' : ""
              )}
            >
              <div className={class4}>
                {advantages[1].title}
              </div>
              <div className={class5}>
                {advantages[1].description[0]}
              </div>
            </div>
          </div>
        </div>
        <div
          ref={ref4}
          className={class1}
        >
          <div className={"flex gap-4 w-full flex-col md:flex-row"}>
            <div
              className={cn(
                "opacity-0 w-full md:w-1/2 mx-auto",
                isIntersecting4
                  ? "opacity-100 animate__bounceInLeft animate__animated"
                  : ""
              )}
            >
              <Image
                src={advantages[2].img}
                alt={"img"}
                width={600}
                height={900}
                // fill={true}
                className={class3}
              />
            </div>
            <div
              className={cn(
                class2,
                isIntersecting4
                  ? 'opacity-100 animate__bounceInRight animate__animated' : ""
              )}
            >
              <div className={class4}>
                {advantages[2].title}
              </div>
              <div className={class5}>
                {advantages[2].description[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
