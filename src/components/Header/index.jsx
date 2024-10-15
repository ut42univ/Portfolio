"use client";

import { HeaderPC } from "@/components/Header/HeaderPC";
import { HeaderMobile } from "@/components/Header/HeaderMobile";
import { useHandleResize } from "@/hooks/useHandleResize";
import { useEffect } from "react";

export const Header = () => {
  const { isMobile, handleResize } = useHandleResize();

  useEffect(() => {
    handleResize();
    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && <HeaderMobile />}
      {!isMobile && <HeaderPC />}
    </>
  );
};
