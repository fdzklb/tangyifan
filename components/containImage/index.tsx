import Image from "next/image";

const ContainImage = ({
  src,
  alt,
  maxWidth,
  maxHeight,
  className,
}: {
  src: string;
  alt?: string;
  maxWidth?: number;
  maxHeight?: number;
  className?: string;
}) => {
  return (
    <div
      style={{
        width: maxWidth || 400,
        height: maxHeight || 400,
        position: "relative",
      }}
      className={className}
    >
      <Image
        src={src}
        alt={alt || "gewinda"}
        fill={true}
        // width={600} // 图片的原始宽度
        // height={600} // 图片的原始高度
        // objectFit="contain" // 图片保持纵横比的情况下进行裁剪，适应容器
        className="rounded-sm object-contain"
      />
    </div>
  );
};

export default ContainImage;
