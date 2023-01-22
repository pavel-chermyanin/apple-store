import Image from "next/image";
import Link from "next/link";
import {
  SearchIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/backetSlice";

const Header = () => {
  const session = false;
  const items = useSelector(selectBasketItems);
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100 ">
            <Image
              src="https://rb.gy/vsvv2o"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      <div className="hidden flex-1  items-center justify-center space-x-8 md:flex">
        <a
          href="#"
          className="headerLink"
        >
          Product
        </a>
        <a
          href="#"
          className="headerLink"
        >
          Explore
        </a>
        <a
          href="#"
          className="headerLink"
        >
          Support
        </a>
        <a
          href="#"
          className="headerLink"
        >
          Business
        </a>
      </div>

      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className="headerIcon" />

        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="primaryGradient absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white">
                {items.length}
              </span>
            )}
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>

        {session ? (
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCx72KEvQJ-JaJMLmSfV-6ZCBInAZ2EAHMru3kLKfaWg7CrFx7&s"
            alt="userImg"
            width={34}
            height={34}
          />
        ) : (
          <UserIcon className="headerIcon" />
        )}
      </div>
    </header>
  );
};

export default Header;
