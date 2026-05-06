import BrandCard from "@/components/BrandCard";
import Hero from "@/components/Hero";
import Tips from "@/components/Tips";

export default function Home() {
  return (
    <div className="my-10">
      <Hero></Hero>
      <Tips></Tips>
      <BrandCard></BrandCard>
    </div>
  );
}
