import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

function Number({ n, children }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const numberRef = useRef(null);

  const { number } = useSpring({
    from: { number: 0 },
    number: startAnimation ? n : 0,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const formattedNumber = number.to(
    (n) => new Intl.NumberFormat().format(n.toFixed(0)) + children
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }
  }, []);

  return (
    <animated.div ref={numberRef} className="font-[500] text-[45px]">
      {formattedNumber}
    </animated.div>
  );
}

function Statistics() {
  return (
    <div className="flex md:flex-row flex-col gap-10 stats  w-fit row-start-3 w-full lg:gap-30 justify-center text-center mt-10 mb-30">
      <div className="flex flex-col ">
        <Number n={1000}>+</Number>
        <p>Local communities impacted</p>
      </div>
      <div className="flex flex-col">
        <Number n={5}>M+</Number>
        <p>Trees planted across Europe</p>
      </div>
      <div className="flex flex-col">
        <Number n={6}>+</Number>
        <p>Different tree species</p>
      </div>
      <div className="flex flex-col">
        <Number n={10000}>+</Number>
        <p>Restored gectores</p>
      </div>
    </div>
  );
}

export default Statistics;
