import { useState } from "react";

export const useHandleResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return { isMobile, handleResize };
};
