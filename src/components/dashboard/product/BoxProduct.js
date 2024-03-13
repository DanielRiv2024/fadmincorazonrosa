export default function BoxProduct({ product }) {
  return (
    <div className="bg-transparent flex flex-col justify-center items-center ">
      <img
        src="https://flores1.com/media/catalog/product/cache/17082ca2beac99d42854858265578a95/b/o/bouquet-6-rosas.jpg"
        className="w-[120px] h-[120px] rounded-md"
        alt={product.name}/>
      <p className="font-bold text-center w-[200px]">{product.name}</p>
      <p className="text-[10px] text-gray-400 w-[130px]">{product.description}</p>
      <p className="font-bold text-[12px]">{product.price} colones</p>
    </div>
  );
}
