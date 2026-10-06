import Image from "next/image";
import { cldUrl } from "@/lib/cloudinary";

export default function CldImg({
  src,
  alt = "",
  width = 800,
  height = 600,
  className = "",
  priority = false,
  sizes = "100vw",
  fill = false,
}) {
  const optimized = cldUrl(src, { width: fill ? 1600 : width });

  if (fill) {
    return (
      <Image
        src={optimized}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={optimized}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}
