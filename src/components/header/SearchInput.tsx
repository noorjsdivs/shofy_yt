"use client";

import { getData } from "@/app/helpers";
import { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import { ProductType } from "../../../type";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false); // New state to manage input focus
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchContainerRef = useRef(null); // Ref to detect clicks outside
  useEffect(() => {
    const getProducts = async () => {
      const endpoint = "https://dummyjson.com/products";
      try {
        const data = await getData(endpoint);
        setProducts(data?.products);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    getProducts();
  }, []);
  useEffect(() => {
    const filtered = products.filter((item: ProductType) =>
      item?.title.toLocaleLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [search]);
  // Effect to detect click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        // @ts-ignore
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsInputFocused(false); // Hide the list if clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={searchContainerRef}
      className="hidden md:inline-flex flex-1 h-10 relative"
    >
      <input
        type="text"
        placeholder="Search products here..."
        className="w-full h-full outline-none border-2 border-themeColor px-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
      />
      {search && (
        <RiCloseLine
          onClick={() => setSearch("")}
          className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
        />
      )}

      {isInputFocused && search && (
        <div className="absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black">
          {filteredProducts?.length > 0 ? (
            <div className="flex flex-col">
              {filteredProducts?.map((item: ProductType) => (
                <Link
                  key={item?.id}
                  href={{
                    pathname: `/products/${item?.id}`,
                    query: { id: item?.id },
                  }}
                  onClick={() => setSearch("")}
                  className="flex items-center gap-x-2 text-base font-medium hover:bg-lightText/30 px-3 py-1.5"
                >
                  <CiSearch className="text-lg" /> {item?.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-10 px-5">
              <p className="text-base">
                Nothing matched with{" "}
                <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                  {search}
                </span>{" "}
                please try again.
              </p>
            </div>
          )}
        </div>
      )}

      <span className="w-10 h-10 bg-themeColor/80 inline-flex items-center justify-center text-white absolute top-0 right-0 border border-themeColor hover:bg-themeColor duration-200 cursor-pointer">
        <RiSearchLine />
      </span>
    </div>
  );
};

export default SearchInput;
