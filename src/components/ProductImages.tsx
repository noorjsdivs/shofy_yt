"use client";

import Image from "next/image";
import { useState } from "react";
interface Props {
  images: string[];
}

const ProductImages = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className="flex flex-start">
      <div>
        {images?.map((item, index) => (
          <Image
            src={item}
            alt="productImage"
            width={200}
            height={200}
            priority
            key={index}
            className={`w-24 h-24 object-contain cursor-pointer opacity-80 hover:opacity-100 duration-300 border border-gray-200 mb-1 ${
              currentImage === item && "border-gray-500 rounded-sm opacity-100"
            }`}
            onClick={() => setCurrentImage(item)}
          />
        ))}
      </div>
      <div className="bg-gray-100 rounded-md ml-5 w-full max-h-[550px]">
        {currentImage && (
          <Image
            src={currentImage}
            alt="mainImage"
            width={500}
            height={500}
            priority
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default ProductImages;
