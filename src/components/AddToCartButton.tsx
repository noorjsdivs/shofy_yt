"use client";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/shofySlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateType } from "../../type";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
interface PropsType {
  product?: ProductType;
  className?: string;
}

const AddToCartButton = ({ product, className }: PropsType) => {
  const { cart } = useSelector((state: StateType) => state?.shopy);
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, product]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success(
        `${product?.title.substring(0, 10)}... added successfully!`
      );
    }
  };

  const handleAdd = () => {
    dispatch(increaseQuantity(product?.id));
    toast.success(`${product?.title.substring(0, 10)}... added successfully!`);
  };
  const handleMinus = () => {
    if (existingProduct?.quantity! > 1) {
      dispatch(decreaseQuantity(product?.id));
      toast.success(`Quantity decreased successfully!`);
    } else {
      toast.error("Quantity can not decrease less than 1");
    }
  };

  return (
    <>
      {existingProduct ? (
        <div className="flex self-start items-center justify-center gap-2 py-2 mb-2">
          <button
            disabled={existingProduct?.quantity! <= 1}
            onClick={handleMinus}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={twMerge(
            "bg-transparent border border-skyColor text-black rounded-full py-1.5 hover:bg-skyColor hover:text-white duration-300 my-2",
            className
          )}
        >
          Add to cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
