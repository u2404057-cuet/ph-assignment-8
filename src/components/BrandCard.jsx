import { Card } from "@heroui/react";
import Image from "next/image";

const topBrands = [
  {
    name: "SunShade",
    specialty: "UV Protection Eyewear",
    logo: "🕶️",
  },
  {
    name: "GlowGuard",
    specialty: "Skincare & Sun Protection",
    logo: "🧴",
  },
  {
    name: "CoastalWave",
    specialty: "Summer Fashion",
    logo: "👗",
  },
  {
    name: "AquaFun",
    specialty: "Beach & Pool Accessories",
    logo: "🏖️",
  },
];

const BrandCard = () => {
  return (
    <div className="container mx-auto my-10 space-y-5">
        <h1 className="font-bold text-5xl text-center">Top Brands</h1>
      <div className="flex flex-wrap justify-center gap-5">
        {topBrands.map((brand, index) => (
          <div key={index} className="bg-gray-100 p-5 rounded-2xl">
            <Card className="flex flex-row gap-3 p-1" variant="transparent">
                <div className="">{brand.logo}</div>
              <div className="flex flex-1 flex-col justify-center gap-1">
                <Card.Title className="text-sm">{brand.name}</Card.Title>
                <Card.Description className="text-xs">{brand.specialty}</Card.Description>
              </div>
            </Card>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCard;
