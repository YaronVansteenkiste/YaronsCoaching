import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "./App.css";
import AnimBackground from "./components/AnimBackground";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Prices from "./pages/prices";
import Contact from "./pages/contact";

function App() {
  const aboutControls = useAnimation();
  const pricesControls = useAnimation();
  const contactControls = useAnimation();

  const refAbout = useRef();
  const refPrices = useRef();
  const refContact = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const svgCode = `<svg width="30px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
	<path id="wheel" d="M123.359,79.775l0,72.843" style="fill:none;stroke:#fff;stroke-width:20px;"/>
	<path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style="fill:none;stroke:#fff;stroke-width:20px;"/>
</svg>`;

  const divRef = useRef();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutTop = refAbout.current?.getBoundingClientRect().top || 0;
      const pricesTop = refPrices.current?.getBoundingClientRect().top || 0;
      const contactTop = refContact.current?.getBoundingClientRect().top || 0;
      const windowHeight = window.innerHeight;

      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      aboutTop < windowHeight / 2
        ? aboutControls.start({
            opacity: 1,
            filter: "blur(0px)",
            transform: "translate3d(0, 0, 0)",
          })
        : aboutControls.start({
            opacity: 0,
            filter: "blur(10px)",
            transform: "translate3d(0, 0, 0)",
          });

      pricesTop < windowHeight / 2
        ? pricesControls.start({
            opacity: 1,
            filter: "blur(0px)",
            transform: "translate3d(0, 0, 0)",
          })
        : pricesControls.start({
            opacity: 0,
            filter: "blur(10px)",
            transform: "translate3d(0, 0, 0)",
          });

      contactTop < windowHeight / 2
        ? contactControls.start({
            opacity: 1,
            filter: "blur(0px)",
            transform: "translate3d(0, 0, 0)",
          })
        : contactControls.start({
            opacity: 0,
            filter: "blur(10px)",
            transform: "translate3d(0, 0, 0)",
          });
    };

    const debounce = (func, wait) => {
      let timeout;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    };

    const handleScrollDebounced = debounce(handleScroll, 100);

    window.addEventListener("scroll", handleScrollDebounced, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [aboutControls, pricesControls, contactControls]);

  return (
    <div className="App">
      <AnimBackground></AnimBackground>
      {isVisible && (
        <div
          className="scroll"
          dangerouslySetInnerHTML={{ __html: svgCode }}
          onClick={handleScrollToTop}
          ref={divRef}
        />
      )}
      <header>
        <Navbar />
      </header>
      <main>
        <Home></Home>
        <motion.div
          ref={refAbout}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            transform: "translate3d(0, 0, 0)",
          }}
          animate={aboutControls}
        >
          <About></About>
        </motion.div>
        <motion.div
          ref={refPrices}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            transform: "translate3d(0, 0, 0)",
          }}
          animate={pricesControls}
        >
          <Prices></Prices>
        </motion.div>
        <motion.div
          ref={refContact}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            transform: "translate3d(0, 0, 0)",
          }}
          animate={contactControls}
        >
          <Contact></Contact>
        </motion.div>
      </main>
    </div>
  );
}

export default App;
