import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../context/ProductsContext";
import { AiFillStar, AiOutlineInfoCircle } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { BsInfoSquareFill } from "react-icons/bs";
import {MdLocationOn} from 'react-icons/md'

function FullProduct() {
  // VIEW FULL PRODUCT DETAILS FUNCTION
  const product = useContext(ProductsContext);

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();

  const fullProductDetails = async () => {
    await axios
      .get(`https://example-data.draftbit.com/products?id=${id}`)
      .then((res) => {
        setProductDetails(res.data);
      });
  };
  console.log(productDetails);
  useEffect(() => {
    fullProductDetails();
  }, []);

  const num1 = 100;
  const num2 = 50;
  const btnStyle = "py-4 px-8 text-white font-bold hover:text-slate-600"
  return (
    <>
      {productDetails?.map((detail) => {
        const {
          id,
          image_url,
          name,
          category,
          list_price,
          sale_price,
          description,
          average_product_rating,
          num_reviews,
          brand,
        } = detail;

        const discountAmout = Math.floor(list_price - sale_price);

        return (
          <>
            <div className="flex flex-col md:flex-row">
                {/* PRODUCT IMAGE */}
              <div className="w-full h-[400px] md:w-1/2 lg:w-1/3 md:h-[500px] ">
                <div>
                <img
                  src={image_url}
                  alt={name}
                  className="w-full h-full object-contain"
                />
                </div>
               

                <div className="flex gap-4 justify-center mt-5 lg:mt-0">
                    <button className={`${btnStyle} bg-yellow-500 hover:bg-yellow-400`}>Add to Cart</button>
                    <button className={`${btnStyle} bg-orange-500 hover:bg-orange-400`}>Buy Now</button>
                </div>
              </div>

{/* PRODUCT DETAILS */}
              <div className="w-full md:w-1/2 lg:w-2/3 p-4 mt-20">
                <p className="text-gray-500 text-xl">{brand}</p>
                <h1>{name}</h1>

                <div className="flex items-center justify-start gap-3 ">
                  <h1 className="text-2xl font-bold">₹{sale_price}</h1>{" "}
                  <h1 className="text-gray-500 line-through">{list_price}</h1>
                  {/* OFFER % */}
                  <div className="text-green-600 font-semibold">
                    {Math.floor((discountAmout / list_price) * 100)}% off
                  </div>
                  {console.log(parseInt(list_price - list_price))}
                  <p className="cursor-pointer">
                    <AiOutlineInfoCircle />
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center bg-green-600 px-2 gap-1  rounded-3xl text-white cursor-pointer">
                    {average_product_rating} <AiFillStar />
                  </span>
                  <span className="text-gray-500 cursor-pointer">
                    {num_reviews} reviews
                  </span>
                </div>

                <div className="mt-5">
                  <h1 className="font-semibold text-lg">About This Product</h1>
                  <p className="flex gap-2">
                    <span>
                      <BsInfoSquareFill className="text-green-600 text-xl" />
                    </span>
                    <span> {description}</span>
                  </p>
                </div>

                <p className="flex items-center bg-white w-fit  border-b-2 border-black mt-5 text-sm px-2">
                    <MdLocationOn className="text-xl"/>
                    <input type="number" className="py-4 outline-none px-2 text-gray-500  md:w-[300px]" placeholder="Enter delivery pincode"/>
                    <button>Check</button>
                </p>

              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default FullProduct;
