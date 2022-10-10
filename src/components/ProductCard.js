import React, { useState } from "react";
import { GrCart } from "react-icons/gr";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

function ProductCard({ product }) {
  const { ratingFunction } = useContext(ProductsContext);

  const {
    id,
    image_url,
    name,
    category,
    list_price,
    sale_price,
    average_product_rating,
  } = product;

  const [isCartAdded, setIsCartAdded] = useState(false);
  const iconStyle = "text-3xl ";
  const num = 4;

  return (
    <div className="relative bg-slate-50">
      <Link to={`/product/${id}`} key={id}>
        <div className=" rounded-lg shadow-2xl p-4 ">
          <div className="w-[250px] h-[300px]">
            <img
              src={image_url}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <h4>{name.substring(0, 20)}</h4>
          <div className="flex gap-3">
            <h4>₹{sale_price}</h4>
            <h4 className="line-through text-gray-500">₹{list_price}</h4>
          </div>
          <span className="flex gap-3 items-center text-yellow-800">{<AiFillStar /> }{average_product_rating} </span>
          {/* <span>{ratingFunction}</span> */}
        </div>
      </Link>

      <span
        className="cursor-pointer absolute right-4 bottom-5 z-99"
        onClick={() => setIsCartAdded((cart) => !cart)}
      >
        {isCartAdded ? (
          <BsCartCheckFill className={iconStyle} />
        ) : (
          <GrCart className={iconStyle} />
        )}
      </span>
    </div>
    // </div>
  );
}

export default ProductCard;
