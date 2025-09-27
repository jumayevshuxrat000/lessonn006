import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center py-10 text-gray-500">Loading...</p>;

  return (
    
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <div className="w-full bg-gray-100 rounded-xl p-4 flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[380px] h-[380px] object-cover rounded-lg"
          />
        </div>

        <div className="flex gap-2 mt-4 overflow-x-auto">
          {product.images?.slice(0, 4).map((img, i) => (
            <img
              key={i}
              src={img}
              alt="thumb"
              className="w-20 h-20 object-cover rounded-md border border-gray-200 hover:border-purple-500 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
        <div className="flex items-center gap-2 text-sm text-yellow-500">
          ⭐ {product.rating} / 5
          <span className="text-gray-500">( {product.stock} ta mavjud )</span>
        </div>
        <div className="mt-3">
          <p className="text-3xl font-bold text-purple-600">
            {product.price * 13000} so‘m
          </p>
          {product.discountPercentage > 0 && (
            <p className="text-sm text-gray-500 line-through">
              {(product.price * 13000 * (100 / (100 - product.discountPercentage))).toFixed(0)} so‘m
            </p>
          )}
        </div>

        <div className="flex gap-4 mt-5">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
            Savatga qo‘shish
          </button>
          <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition">
            Sevimlilarga
          </button>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold mb-2">Tavsif</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </div>
    
  );
}

export default Detail;
