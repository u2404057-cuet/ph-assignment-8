"use client";
import { Button, Card, Link } from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card className="col-span-12 min-h-120 overflow-hidden rounded-3xl lg:col-span-6">
        {/* Background image */}
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={600}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        ></Image>
        <div className="absolute inset-0 bg-linear-to-t from-white/30 via-transparent to-transparent" />
        {/* Header */}
        <Card.Header className="z-10 text-white">
          <Card.Title className="text-xs font-semibold tracking-wide text-black/70">
            {product.name}
          </Card.Title>
          <Card.Description className="text-sm leading-5 font-medium text-black/50">
            Brand: {product.brand}
          </Card.Description>
        </Card.Header>
        {/* Footer */}
        <Card.Footer className="z-10 mt-auto flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-black flex items-center gap-3">
              <FaStar className="text-yellow-400" /> {product.rating}
            </div>
            <div className=" text-black font-bold text-4xl">
              ${product.price}
            </div>
          </div>
          <Button
            onClick={() => redirect(`/products/${product.id}`)}
            className="bg-white text-black hover:scale-110 transition-transform duration-300 ease-out"
            size="sm"
            variant="tertiary"
          >
            Show details
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
