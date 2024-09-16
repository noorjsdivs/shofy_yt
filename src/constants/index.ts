import { bannerImageOne } from "@/assets";

export const navigation = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "Categories", href: "/categories" },
  { title: "Offers", href: "/offers" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const banner = {
  _id: 1001,
  priceText: "Starting at $999.90",
  title: "The best tablet Collection 2024",
  textOne: "Exclusive offer",
  offerPrice: "-30%",
  textTwo: "off this week",
  buttonLink: "/products",
  image: bannerImageOne,
};
