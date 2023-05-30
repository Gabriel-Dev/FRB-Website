import { useContext } from "react";
import { UserContext } from "../../contexts/userContext/userContext";
import React, { useEffect, useRef } from 'react';

function ObserverExample() {
    const { observer, 
        setObserver } = useContext(UserContext);
  const valueRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setObserver("animationCard")
          console.log('Elemento visível');
          setObserver("animationNone")
        } else {
          console.log('Elemento invisível');
        }
      });
    });

    observer.observe(valueRef.current);

    
    return () => {
      observer.unobserve(valueRef.current);
    };
  }, []);
  setObserver(valueRef)
  return <div ref={valueRef}></div>;
}

export default ObserverExample;