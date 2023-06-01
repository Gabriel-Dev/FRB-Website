import { useEffect, useRef } from "react";
import { ObserverStyle } from "./styled";

export const ObservedItem = ({ onVisible, children }) => {
  
  const itemRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [onVisible]);

  return (
    <ObserverStyle ref={itemRef}>
      {children}
    </ObserverStyle>
  );
};