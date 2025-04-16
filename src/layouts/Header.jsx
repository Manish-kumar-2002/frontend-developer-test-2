import React, { useState, useEffect } from "react";
import LogoImg from "../assets/images/logo.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    // Run once on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-md lg:py-[0px]"
          : "bg-transparent lg:py-[19px]"
      } fixed z-[99] w-full`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <motion.a
          href="#"
          className="flex-none lg:ml-[-17px]"
          variants={fadeIn("down", 0)}
          initial="hidden"
          animate="show"
        >
          <img
            src={LogoImg}
            alt="LogoImg"
            className="w-[74px] md:w-auto h-auto"
          />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
        >
          {isOpen ? (
            <i
              className={`fas fa-times text-[1.8rem] ${
                isScrolled ? "text-black" : "text-white"
              } `}
            ></i>
          ) : (
            <i
              className={`fas fa-bars text-[1.8rem] ${
                isScrolled ? "text-black" : "text-white"
              } `}
            ></i>
          )}
        </motion.button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block shadow-lg lg:shadow-none" : "hidden"
          } absolute top-full left-0 w-full z-10 bg-white lg:bg-transparent lg:static lg:flex lg:items-center lg:justify-center lg:gap-10`}
        >
          {/* <motion.ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-4 lg:p-0 lg:gap-[52px] lg:ml-[-28px]">
            <li>
              <a
                href="#"
                className={`lg:text-[24px] font-normal ${
                  isScrolled ? "lg:text-black" : "lg:text-white"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`lg:text-[24px] font-normal ${
                  isScrolled ? "lg:text-black" : "lg:text-white"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`lg:text-[24px] font-normal ${
                  isScrolled ? "lg:text-black" : "lg:text-white"
                }`}
              >
                Investment
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`lg:text-[24px] font-normal ${
                  isScrolled ? "lg:text-black" : "lg:text-white"
                }`}
              >
                Gold
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`lg:text-[24px] font-normal ${
                  isScrolled ? "lg:text-black" : "lg:text-white"
                }`}
              >
                Utility Token
              </a>
            </li>
          </motion.ul> */}
          <motion.ul
            className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-4 lg:p-0 lg:gap-[52px] lg:ml-[-28px]"
            initial="hidden"
            animate="show"
          >
            {["Home", "About", "Investment", "Gold", "Utility Token"].map(
              (text, i) => (
                <motion.li
                  key={text}
                  variants={fadeIn("down", 0.6 + i * 0.2)} // stagger delay
                >
                  <a
                    href="#"
                    className={`lg:text-[24px] font-normal ${
                      isScrolled ? "lg:text-black" : "lg:text-white"
                    }`}
                  >
                    {text}
                  </a>
                </motion.li>
              )
            )}
          </motion.ul>
        </nav>

        {/* Login/Register */}
        <motion.div
          className={`lg:text-[24px] font-normal hidden lg:flex items-center gap-2 ${
            isScrolled ? "text-black" : "text-white"
          }`}
          variants={fadeIn("down", 1.8)}
          initial="hidden"
          animate="show"
        >
          <a href="#">Register</a>
          <span>/</span>
          <a href="#">Login</a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
