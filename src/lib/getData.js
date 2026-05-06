export const getProductData = async () => {
    const res = await fetch("http://localhost:3000/productsData.json");
  const products = await res.json();
  return products;
}