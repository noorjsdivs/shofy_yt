import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLink = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Link
        href="https://www.facebook.com/"
        target="blank"
        className="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md"
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://www.facebook.com/"
        target="blank"
        className="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md"
      >
        <FaXTwitter />
      </Link>
      <Link
        href="https://www.facebook.com/"
        target="blank"
        className="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href="https://www.facebook.com/"
        target="blank"
        className="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md"
      >
        <FaInstagram />
      </Link>
    </div>
  );
};

export default SocialLink;
