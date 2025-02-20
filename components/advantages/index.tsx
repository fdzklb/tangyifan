"use client";

import { useState } from "react";
import Image from "next/image";
import useOnScreen from "../hooks/useOnScreen";
import { cn } from "@/lib/utils";
import { title } from "process";
import ContainImage from "../containImage";

const advantages = [
  {
    img: "/imgs/company/1.png",
    title:
      "Advanced Technology and Green Manufacturing Ensure Superior Quality Control",
    descriptions: [
      {
        title: "Advanced Technology",
        content:
          "Our state-of-the-art manufacturing facilities are equipped with the latest technology to ensure efficient and high-quality production. We use precision machinery and advanced filtration techniques to deliver reliable products.",
      },
      {
        title: "Sustainability",
        content:
          "We prioritize sustainability by using eco-friendly materials and implementing green practices to minimize our environmental impact.",
      },
      {
        title: "Quality Control",
        content:
          "Our rigorous quality control processes ensure that every product meets the highest standards. We conduct multiple tests to ensure performance, durability, and safety.",
      },
    ],
  },
  {
    img: "/imgs/company/3.png",
    title: "Expert Team Drives Collaboration in Water Filtration Excellence",
    descriptions: [
      {
        title: "Professional Team",
        content:
          "Our team comprises highly skilled engineers, designers, and technicians with extensive experience in the water filtration industry. We are dedicated to innovation and continuous improvement",
      },
      {
        title: "Collaboration",
        content:
          "Our team works seamlessly together to deliver exceptional results. We prioritize open communication and collaboration to ensure every product meets our high standards.",
      },
    ],
  },
  {
    img: "/imgs/company/4.png",
    title:
      "Premium Materials and Diverse Solutions Earn Awards for Water Filtration Excellence",
    descriptions: [
      {
        title: "Premium Materials",
        content:
          "Our products are made with premium materials, ensuring durability and performance. We use only the best components to create products that stand the test of time.",
      },
      {
        title: "Diverse Range",
        content:
          "We offer a wide range of water filtration solutions, including faucet filters, pitcher filters, and whole-house systems, to meet the diverse needs of our customers.",
      },
      {
        title: "Awards and Recognition",
        content:
          "Our products have received numerous awards and accolades, reflecting our commitment to quality and excellence.",
      },
    ],
  },
];

export default function Advantages() {
  // 用于存储每条评论的点赞状态
  const [ref1, isIntersecting1] = useOnScreen({ threshold: 0.5 });
  const [ref2, isIntersecting2] = useOnScreen({ threshold: 0.2 });
  const [ref3, isIntersecting3] = useOnScreen({ threshold: 0.2 });
  const [ref4, isIntersecting4] = useOnScreen({ threshold: 0.2 });

  const class1 = "flex flex-col gap-16 justify-center text-lg my-8 mx-2";
  const class2 = "opacity-0 w-full md:w-1/2 flex flex-col md:align-center";
  const class3 = "w-full rounded-md";
  const class4 = "flex gap-2 text-xl xl:text-2xl font-bold w-[80%] lg:mx-auto";
  const class5 = "text-xl xl:text-2xl md:w-[80%] pt-4 md:pt-6 mx-0 lg:mx-auto";

  return (
    <div className="w-full font-serif flex justify-center bg-[#E7E5E0] my-10 text-gray-600">
      <div className="flex gap-6 flex-col items-center w-[95%] 2xl:w-[80%]">
        <div ref={ref1} className={cn("flex flex-col gap-6 my-8")}>
          <div
            className={cn(
              "text-center text-4xl text-gray-600 opacity-0",
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
        <div ref={ref2} className={class1}>
          <div className={"flex gap-4 w-full flex-col md:flex-row"}>
            <div
              className={cn(
                "opacity-0 w-full lg:w-1/2 mx-auto flex flex-col",
                isIntersecting2
                  ? "opacity-100 animate__bounceInLeft animate__animated"
                  : ""
              )}
            >
              {/* <ContainImage src={advantages[0].img} alt={"img"} maxWidth={600} /> */}
              <Image
                src={advantages[0].img}
                alt={"gewinda"}
                width={600}
                height={600}
              />
            </div>
            <div
              className={cn(
                class2,
                isIntersecting2
                  ? "opacity-100 animate__bounceInRight animate__animated"
                  : ""
              )}
            >
              <div className={class4}>{advantages[0].title}</div>
              {advantages[0].descriptions.map((description, idx) => (
                <div key={description.title} className={class5}>
                  <span className="font-bold">{`${description.title}：`}</span>
                  <span>{description.content}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div ref={ref3} className={class1}>
          <div className={"flex gap-4 w-full flex-col md:flex-row-reverse"}>
            <div
              className={cn(
                "opacity-0 w-full md:w-1/2 mx-auto",
                isIntersecting3
                  ? "opacity-100 animate__bounceInRight animate__animated"
                  : ""
              )}
            >
              {/* <ContainImage src={advantages[1].img} alt={"img"} maxWidth={600} /> */}
              <Image
                src={advantages[1].img}
                alt={"gewinda"}
                width={600}
                height={600}
              />
            </div>
            <div
              className={cn(
                class2,
                "md:pt-0 lg:pt-8",
                isIntersecting3
                  ? "opacity-100 animate__bounceInLeft animate__animated"
                  : ""
              )}
            >
              <div className={class4}>{advantages[1].title}</div>
              {advantages[1].descriptions.map((description, idx) => (
                <div key={description.title} className={class5}>
                  <span className="font-bold">{`${description.title}：`}</span>
                  <span>{description.content}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div ref={ref4} className={class1}>
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
                width={600}
                height={600}
                src={advantages[2].img}
                alt={"gewinda"}
              />
              {/* <ContainImage src={advantages[2].img} alt={"img"} maxWidth={800} /> */}
            </div>
            <div
              className={cn(
                class2,
                "md:pt-0 lg:pt-8",
                isIntersecting4
                  ? "opacity-100 animate__bounceInRight animate__animated"
                  : ""
              )}
            >
              <div className={class4}>{advantages[2].title}</div>
              {advantages[2].descriptions.map((description, idx) => (
                <div key={description.title} className={class5}>
                  <span className="font-bold">{`${description.title}：`}</span>
                  <span>{description.content}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
