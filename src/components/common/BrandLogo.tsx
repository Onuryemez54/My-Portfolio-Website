"use client";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  setIsOpen?: (isOpen: boolean) => void;
}

export const BrandLogo = ({ setIsOpen }: BrandLogoProps) => {
  return (
    <Link
      href="/"
      onClick={() => setIsOpen?.(false)}
      className="flex items-center"
    >
      <div className="relative h-14 w-14 md:h-16 md:w-16">
        <Image
          src="/logo/logo.png"
          alt="Brand Logo"
          fill
          priority
          sizes="(max-width: 768px) 3.5rem, (max-width: 1024px) 4rem, 4.5rem"
          className="object-contain scale-200"
        />
      </div>
    </Link>
  );
};
