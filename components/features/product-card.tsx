// ProductCard.tsx
'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
  product: {
    label: { en: string; ar: string } | undefined; 
    path: string;
    description: string;
  };
  isSelected: boolean;
  onProductClick: (productTitle: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isSelected,
  onProductClick,
}) => {
  return (
    <div
      onClick={() => onProductClick(product.title)}
      className={`relative cursor-pointer rounded-2xl border transition duration-300 p-6 flex flex-col justify-between items-center min-h-[260px]
      ${isSelected ? 'bg-[#0d2e57] text-white' : 'bg-white text-[#1c1c1c] border-gray-200 hover:shadow-lg'}`}
    >
      {/* Icon */}
      <div className="mb-4 h-12 flex items-center justify-center">
        <Image
          src={product.icon}
          alt={product.title}
          className={`h-10 w-10 object-contain ${isSelected ? 'filter brightness-0 invert' : ''}`}
        />
      </div>

      {/* Title */}
      <h4 className="font-semibold text-base mb-1">{product.title}</h4>

      {/* Description */}
      <p className="text-sm text-center mb-4 px-2 min-h-[3rem]">
        {product.description}
      </p>

      {/* CTA */}
      {isSelected && product.title === "Motor" ? (
        <button className="mt-auto bg-white text-[#10426C] font-semibold py-2 px-5 rounded-full text-sm hover:bg-gray-100 transition">
          Insure now
        </button>
      ) : (
        <Link href={product?.url}
          className={`mt-auto font-medium text-sm underline ${
            isSelected ? 'text-white' : 'text-[#1e3a8a]'
          } hover:no-underline`}
          
        >
          Learn More
        </Link>
      )}

      {/* Bottom Accent */}
      {!isSelected && (
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#10426C] rounded-b-2xl" />
      )}
    </div>
  );
};

export default ProductCard;