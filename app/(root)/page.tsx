import * as React from "react";
import img from "@/public/imgs/index.png";
import Image from "next/image";
import { BlogList } from "@/components/blog/blog-list";
import Advantages from "@/components/advantages";
import { description, products } from "@/constants";
export default async function Page() {
  return (
    <div className="w-full font-serif bg-slate-100 gap-10">
      <div className="relative flex justify-center w-full">
        <Image
          src={img}
          alt={"img"}
          width={1920}
          height={600}
          className="w-full animate__animated animate__bounceInDown"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 蒙层颜色和透明度
          }}
        />
        <div className="absolute top-[45%] left-8 text-white">
          <div className="flex flex-col text-xl animate__animated animate__bounceInRight">
            <div>{"这是一些介绍文字，介绍格温达公司的理念产品和规划"}</div>
            <div>{"比如我们就是为大家提供驻阿努也的服务，希望在以后的额日子在哪家的"}</div>
            <div>{"艾弥托福善哉善哉我的歌妈妈你再那里"}</div>
          </div>
        </div>
        <div className="absolute top-[25%] right-8 text-white">
          <div className="flex flex-col gap-4 text-8xl animate__animated animate__bounceInLeft">
            <span>{description[0]}</span>
            <span>{description[1]}</span>
            <span>{description[2]}</span>
          </div>
          <div className="text-2xl mt-6 animate__animated animate__bounceInUp animate__delay-1s">
            {description[3]}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-col gap-8 xl:w-[75%] w-[90%] my-8">
          <div className="text-center text-5xl text-gray-600">PRODUCTS</div>
          <div className="text-center text-2xl text-gray-600">
            OUR LUXURY OUTDOOR FURNITURE COLLECTIONS
          </div>
        </div>
        <div className="flex justify-center xl:w-[80%] w-[90%] text-lg my-8 mx-2">
          <BlogList blogs={products} />
        </div>
      </div>
      <Advantages />
    </div>
  );
}
