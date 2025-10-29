import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
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
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              {product.category?.name}
            </p>
            <p className="font-bold text-blue-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
