export const getProductData = async () => {
    const res = await fetch("https://ph-assignment-8-phi.vercel.app/productsData.json");
  const products = await res.json();
  return products;
}