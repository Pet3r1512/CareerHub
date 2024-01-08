import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function ImageWithLoading({
  src,
  alt = "",
  width,
  height,
  priority = false,
  sizes,
  fill = false,
  className,
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  className?: string;
}) {
  if (!width && !height) {
    return (
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        fill={fill}
        priority={priority}
        className={twMerge(
          className,
          "transition-opacity opacity-0 duration-[1.75s]"
        )}
        onLoadingComplete={(image) => {
          image.classList.remove("opacity-0");
        }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={twMerge(
        className,
        "transition-opacity opacity-0 duration-[1.75s]"
      )}
      onLoadingComplete={(image) => {
        image.classList.remove("opacity-0");
      }}
    />
  );
}
