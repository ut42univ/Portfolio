"use client";

import { useState, useEffect } from "react";
import { HeaderPC } from "@/components/Header/HeaderPC";
import { HeaderMobile } from "@/components/Header/HeaderMobile";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && <HeaderMobile />}
      {!isMobile && <HeaderPC />}
    </>
  );
};
