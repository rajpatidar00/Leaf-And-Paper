import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  // const [nextImg, setNextImg] = useState(0);
  // const [filterWithCategory, setFilterWithCategory] = useState([]);
  // const filteredProducts = products.slice(0, 12);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        // const clothes = data.filter(
        //   (product) => product.category?.name === "Clothes"
        // );
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center my-4">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-84 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              {product.category?.name}
            </p>
            <div className="flex w-full justify-between bottom-0">
              <p className="font-bold text-blue-600">${product.price}</p>
              <NavLink
                to={`/product/${product.id}`}
                target="_blank"
                className="p-2 bg-blue-500 font-bold text-white rounded-md cursor-pointer hover:bg-blue-700"
              >
                {"View Product -->"}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
