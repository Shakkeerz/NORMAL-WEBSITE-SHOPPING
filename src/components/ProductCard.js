import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function ProductCard({ product }) {
  const { id, image, title, price, rating, category, description } = product;

  return (
    <div>
      <div class="flex justify-center w-80">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <div className="h-96">
            <img
              src={image}
              alt={title}
              className="h-full w-full rounded-lg object-contain shadow-md"
            />
          </div>

          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {" "}
              {title.substring(0, 40)}...
            </h5>
            <p class="text-gray-700 text-base mb-4">
              {description.substring(0, 100)}
              <span className="text-xs font-bold text-blue-600 cursor-pointer hover:underline hover:bg-slate-200 px-2 rounded-lg">
                {" "}
                Read More...
              </span>
            </p>
            <span className="text-orange-500 font-bold flex justify-between mb-4">
              <p className='flex gap-2  items-center '>
                {<AiFillStar />}

                {/* <AiOutlineStar/>  */}
                {rating.rate}
              </p>

              <p className="font-bold text-black">${price}</p>
            </span>
            <button
              type="button"
              class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              + Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
