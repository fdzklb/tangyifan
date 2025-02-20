import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { products } from "@/constants";
import TableList from "@/components/tableList";
import { getProductImagePath } from "@/lib/resolveMarkdown";
export async function generateStaticParams() {
  return products.map((item) => ({ productId: item.productId.toString() }));
}

export const dynamicParams = true; // or false, to 404 on unknown paths

export default async function Page(props: { params: { productId: string } }) {
  const { productId } = await props.params;
  const imgs = await getProductImagePath(decodeURI(productId) as string);

  const product = products?.find((item) => item.productId === +productId);
  const { details = [], title = "", infos = [] } = product || {};

  return (
    <div className="w-full font-serif bg-[#E7E5E0] text-gray-600">
      {details && details.length > 0 ? (
        <div className="font-serif py-8 flex justify-center">
          <div className="w-[96%] md:w-[90%] lg:w-[85%] flex flex-col gap-4 md:flex-row-reverse">
            {/* <div className="md:fixed md:left-[51%] md:right-[5%] lg:right-[7.5%]"> */}
            <div className="md:w-[50%]">
              <div className="w-full md:sticky md:top-8">
                {details.map((item, index) => (
                  <div key={index} className={cn("gap-4 w-full")}>
                    <div className="w-full">
                      {item.title && (
                        <div className="text-center 2xl:text-2xl text-xl font-bold w-[80%] mx-auto">
                          {item.title}
                        </div>
                      )}
                      {item.description.map((desc, index) => (
                        <div key={desc} className="2xl:text-xl text-lg mt-4">
                          {desc}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {infos && infos.length > 0 && (
                  <div className="flex flex-col gap-4 mt-7">
                    <TableList columns={2} data={infos} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 md:w-[50%]">
              {imgs.map((img, index) => (
                <div key={index}>
                  <Image
                    src={img}
                    alt={title}
                    // layout="responsive"
                    width={800} // 图片的原始宽度
                    height={600} // 图片的原始高度
                    // objectFit="contain" // 图片按比例缩放，适应容器
                    className="rounded-sm w-full"
                  />
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
