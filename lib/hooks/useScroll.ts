import { useRef, useState } from "react";

const useScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -window.innerWidth/1.25, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: window.innerWidth/1.25, behavior: "smooth" });
  };

  return {scrollLeft, scrollRight, scrollRef, canScrollLeft, canScrollRight, updateScrollButtons}
}

export default useScroll