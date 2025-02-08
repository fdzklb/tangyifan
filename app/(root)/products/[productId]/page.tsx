import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { products } from "@/constants";
export async function generateStaticParams() {
  return products.map((item) => ({ productId: item.productId.toString() }))
}

export const dynamicParams = true // or false, to 404 on unknown paths

export default async function Page(props: { params: { productId: string } }) {
  const { productId } = await props.params;
  const productsDetails = products?.find(
    (item) => item.productId === +productId
  )?.details;

  return (
    <div>
      {productsDetails && productsDetails.length > 0 ? (
        <div className="w-full font-serif flex justify-center bg-[#E7E5E0] text-gray-600">
          <div className="flex flex-col items-center xl:w-[75%] w-[90%]">
            <div className={cn("flex flex-col gap-8 my-8")}>
              <div
                className={
                  "text-center text-5xl text-gray-600 animate__animated animate__bounceInDown"
                }
              >
                产品名称
              </div>
              <div
                className={cn(
                  "text-center text-2xl text-gray-600 animate__animated animate__bounceInUp animate-delay-500"
                )}
              >
                STRONG SUPPLY CHAIN AND DIRECTLY OPERATED FACTORIES
              </div>
            </div>
            <div className="flex flex-col gap-16 justify-center text-lg my-8 mx-2">
              {productsDetails.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-4 w-full flex-col md:flex-row",
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  )}
                >
                  <div className={"w-full md:w-1/2 mx-auto"}>
                    <Image
                      src={item.img}
                      alt={"img"}
                      width={600}
                      height={900}
                      // fill={true}
                      className="w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-1/2 md:pt-16 flex flex-col md:align-center">
                    <div className="text-center text-3xl font-bold w-[80%] mx-auto">
                      {item.title}
                    </div>
                    <div className="text-center text-2xl md:w-[80%] md:pt-6 mx-auto">
                      {item.description[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        "Empty"
      )}
    </div>
  );
}
