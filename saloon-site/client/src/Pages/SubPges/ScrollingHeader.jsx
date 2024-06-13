import React, { useState, useEffect } from "react";
import Headroom from "react-headroom";

const ScrollingHeader = ({ onScrollDirectionChange }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [downScroll, setDownScroll] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      setDownScroll(true);
      onScrollDirectionChange && onScrollDirectionChange(true);
    } else {
      // Scrolling up
      setDownScroll(false);
      onScrollDirectionChange && onScrollDirectionChange(false);
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Headroom>
      
     
      
    </Headroom>
  );
};

export default ScrollingHeader;
