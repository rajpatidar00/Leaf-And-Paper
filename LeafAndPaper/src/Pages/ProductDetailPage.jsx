import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams(); // URL se id milti hai BKL
  const [product, setProduct] = useState(null);
  const [nextImg, setNextImg] = useState(0);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  ``;

  const images = product ? product.images : [];
  const createdAt = product ? product.creationAt : "";
  const createdDate = new Date(createdAt).toLocaleDateString();
  // console.log(createdAt);
  // console.log(createdDate);
  const handleNextImg = () => {
    setNextImg((prevImg) => (prevImg + 1) % 3);
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="p-12  flex items-center justify-center">
      <div className="bg-gray-100 lg:max-w-[80%]  p-2 bg-gray-100 rounded-lg shadow-lg gap-8">
        <div className="px-4 pb-4 pt-2 font-semibold text-blue-600 text-sm cursor-pointer">
          <NavLink to="/products">Back to Products</NavLink>
        </div>
        <div className="grid md:grid-cols-2 lg:flex lg:flex-row  ">
          <div className="flex flex-col">
            <img
              className="w-96   h-96 object-cover rounded mb-3"
              src={product.images?.[nextImg]}
              alt={product.title}
            />
            <button
              onClick={handleNextImg}
              className="font-bold bg-white rounded-md p-4 w-96 hover:bg-gray-200 hidden md:block"
            >
              {"Image Preview -->"}
            </button>
            <div className="flex flex-col md:hidden md:flex flex-row  w-auto h-24 md:h-36 rounded-lg gap-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    onMouseOver={() => setNextImg(index)}
                    onMouseLeave={() => setNextImg(0)}
                    src={img}
                    alt={"img"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-2  flex-col p-2">
            <h1 className="text-4xl font-bold ">{product.title}</h1>
            <p className="font-semibold">{product.description}</p>
            <h3 className="text-blue-500 font-bold text-xl">
              Price: ₹{product.price * 88}
            </h3>
            <p>{createdDate}</p>
            <div className="flex hidden md:flex flex-row  w-auto h-36 rounded-lg gap-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-28 h-28 rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    onMouseOver={() => setNextImg(index)}
                    onMouseLeave={() => setNextImg(0)}
                    src={img}
                    alt={"img"}
                  />
                </div>
              ))}
            </div>
            <div className="buy-button flex gap-4 bottom-0 bg-blue py-2 w-full">
              <button className="bg-yellow-500 text-white font-bold py-2 px-8 md:px-12 rounded hover:bg-yellow-700">
                Add To Cart
              </button>
              <button className="bg-orange-500 text-white font-bold py-2 px-8 md:px-12 rounded hover:bg-orange-700">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
