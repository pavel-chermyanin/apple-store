import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/backetSlice";
import { urlFor } from "../sanity";

interface Props {
  product: Product;
}

const Product = ({ product }: Props) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket`, {
      position: "bottom-center",
    });
  };
  return (
    <div className="flex max-h-[400px]  w-full select-none flex-col space-y-3 rounded-xl bg-[#35383c] p-4  md:p-6">
      <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          layout="fill"
          objectFit="contain"
          alt={product.title}
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>{product.title}</p>
          <p>{product.price}{" "}руб</p>
        </div>

        <div
          onClick={addItemToBasket}
          className="primaryGradient flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full md:h-[50px] md:w-[50px]"
        >
          <ShoppingCartIcon className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Product;
