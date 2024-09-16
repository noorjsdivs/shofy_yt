import { CiDeliveryTruck } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import Container from "../Container";
const TopHeader = () => {
  return (
    <div className="bg-[#010f1c] text-gray-200 w-full">
      <Container className="flex items-center justify-between">
        <p className="w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1">
          <CiDeliveryTruck className="text-[#ffb342] text-2xl mr-1" /> FREE
          Express Shipping On Orders $570+
        </p>
        <div className="hidden md:inline-flex items-center text-sm text-white">
          <p className="headerTopMenu">
            English <IoChevronDownSharp />{" "}
          </p>
          <p className="headerTopMenu">
            USD <IoChevronDownSharp />{" "}
          </p>
          <p className="headerTopMenu">
            Setting <IoChevronDownSharp />{" "}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
