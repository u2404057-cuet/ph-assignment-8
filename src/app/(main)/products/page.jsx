import ProductCard from "@/components/ProductCard";
import { getProductData } from "@/lib/getData";

const ProductsPage = async () => {
  const products = await getProductData();

  return (
    <div className="container mx-auto my-20 space-y-5">
        <h1 className="font-bold text-5xl text-center border-b border-b-gray-200 pb-5">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
