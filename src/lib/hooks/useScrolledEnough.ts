import { useState, useEffect } from "react";

export default function useScrolledEnough( threshold: number ) {
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setScrolledEnough(true);
      } else {
        setScrolledEnough(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrolledEnough;
}