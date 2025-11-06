import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams(); // URL se id milti hai
  const [product, setProduct] = useState(null);
  const [nextImg, setNextImg] = useState(0);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleNextImg = () => {
    setNextImg((prevImg) => (prevImg + 1) % 3);
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images?.[nextImg]} alt={product.title} width="200" />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      <button onClick={handleNextImg} className="handleNextImg font-bold">
        {"n>"}
      </button>
      <button className="bg-blue-500 p-2 rounded-md">Buy</button>
    </div>
  );
}

export default ProductDetailPage;
