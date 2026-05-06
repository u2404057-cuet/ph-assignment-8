import Image from "next/image";
import offerImage from "@/assets/image_assignment.png";
import ProductCard from "./ProductCard";
import { getProductData } from "@/lib/getData";

const Hero = async () => {
//   const res = await fetch("http://localhost:3000/productsData.json");
//   const products = await res.json();

    const products = await getProductData();

  console.log(products);

  return (
    <div className="space-y-4 container mx-auto">
      <Image
        src={offerImage}
        alt="summer offer"
        width={500}
        height={300}
        className="container mx-auto m-5 rounded-2xl"
      ></Image>

      <p className="text-center font-bold text-4xl border-y border-gray-200 py-5">Popular Deals</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5">
        {
            products.slice(0,3).map(product => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))
        }
      </div>


    </div>
  );
};

export default Hero;
