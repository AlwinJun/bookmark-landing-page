import { useState } from "react";

//Components
import Buttons from "components/Buttons";

// Font-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

// Assets
import bookmarkLogo from "images/logo-bookmark.svg";
import hamburgerIcon from "images/icon-hamburger.svg";
import close from "images/icon-close.svg";
import facebook from "images/icon-facebook.svg";
import twitter from "images/icon-twitter.svg";

const Navbar = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  const toggleNav = () => {
    setIsNavShow((prevIsNavShow) => !prevIsNavShow);
  };

  const navbar = {
    expand: isNavShow ? "top-0" : "-top-[100%]",
    hide: isNavShow ? "hidden" : "",
  };

  return (
    <nav className="fixed left-0 top-0 z-50 h-10 w-full">
      {/* Mobile */}
      <div className="relative sm:hidden">
        {/* Nav collapsed */}
        <div className={`${navbar.hide} bg-white px-4 py-6 shadow-md`}>
          <div className="flex w-full items-center justify-between">
            <a href="#top">
              <img className="cursor-pointer" src={bookmarkLogo} alt="logo" />
            </a>
            <img
              className="cursor-pointer"
              src={hamburgerIcon}
              alt="logo"
              onClick={toggleNav}
            />
          </div>
        </div>
        {/* Nav expand */}
        <div
          className={`${navbar.expand} fixed left-0 grid h-full w-full  transition-all duration-300`}
        >
          <div
            className={`flex flex-col bg-[hsla(229,31%,21%,0.875)] px-6 py-8`}
          >
            <div className={`mb-8 flex items-center justify-between`}>
              <a href="#top" className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="rounded-full bg-white px-2 py-2 text-sm text-dark-blue"
                />
                <span className="uppercase tracking-wider text-white">
                  BOOKMARK
                </span>
              </a>
              <img
                className="cursor-pointer brightness-0 invert"
                src={close}
                alt="logo"
                onClick={toggleNav}
              />
            </div>
            <ul className="mb-8 flex flex-col gap-3 text-center font-light text-white">
              <hr className="border-grayish-blue" />
              {[
                { text: "Features", target: "#features" },
                { text: "Pricing", target: "#pricing" },
                { text: "Contact", target: "#contact" },
              ].map(({ text, target }, index) => (
                <div key={index + 1}>
                  <a href={target}>
                    <li className="mb-3 text-[1.3rem] font-normal">{text}</li>
                  </a>
                  <hr className="border-grayish-blue" />
                </div>
              ))}
            </ul>
            <button
              className="rounded-md border-2 border-solid border-white  py-1 text-white shadow-md hover:bg-white hover:text-dark-blue"
              type="button"
            >
              Login
            </button>
            <div className="mt-auto flex items-center justify-center gap-8">
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="desktop-nav hidden items-center justify-between bg-white px-6 py-6 shadow-md sm:flex md:px-10 lg:px-14">
        <a href="#top">
          <img className="h-8 cursor-pointer" src={bookmarkLogo} alt="logo" />
        </a>
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 font-light text-dark-blue">
            {[
              { text: "Features", target: "#features" },
              { text: "Pricing", target: "#pricing" },
              { text: "Contact", target: "#contact" },
            ].map(({ text, target }, index) => (
              <a href={target} key={index + 1}>
                <li>{text}</li>
              </a>
            ))}
          </ul>
          <Buttons
            type="button"
            btnClass="rounded-md bg-soft-red px-6 py-1 text-white shadow-md"
            text="Login"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
