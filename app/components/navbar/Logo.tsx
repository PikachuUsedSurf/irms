"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer hover:scale-125 transition"
      height="50"
      width="50"
      src="/images/Logo.png"
    />
  );
};

export default Logo;
