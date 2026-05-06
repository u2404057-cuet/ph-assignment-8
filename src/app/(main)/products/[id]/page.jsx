import { getProductData } from "@/lib/getData";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const products = await getProductData();

  const selectedProduct = products.find((p) => p.id == id);
  console.log(selectedProduct);
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row container mx-auto p-10 bg-gray-100 my-20 rounded-2xl gap-4">
        <div>
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={300}
            height={400}
            className="rounded-2xl"
          ></Image>
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h1 className="font-bold text-5xl">{selectedProduct.name}</h1>
            <p className="opacity-80">{selectedProduct.description}</p>
            <h4 className="font-bold">Brand: {selectedProduct.brand}</h4>
          </div>
          <p className="text-3xl font-semibold">Category: {selectedProduct.category}</p>
          <div className="">
            <p className="flex gap-2 items-center"><FaStar className="text-yellow-400" />{selectedProduct.rating}</p>
            <p className="text-3xl font-bold">${selectedProduct.price}</p>
          </div>
          <p className="">Available Stock: {selectedProduct.stock}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
