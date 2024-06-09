import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/theme";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useRef } from "react";
import { useEffect } from "react";

function navLinkClass(isActive) {
  return clsx(
    "block mx-auto w-1/2 sm:w-full px-1 slow duration-100 hover:text-tertiary",
    {
      "border-b-2 border-tertiary text-tertiary": isActive,
    }
  );
}

export default function Navbar() {
  const { theme, toggleTheme, navHeight } = useContext(ThemeContext);
  const [navbarShown, setNavbarShown] = useState(false);
  const navbarRef = useRef(null);
  useEffect(() => {
    function handleMouseDown(event) {
      if (
        navbarShown &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setNavbarShown(!false);
      }
    }
    function handleScroll() {
      if (navbarShown) {
        setNavbarShown(false);
      }
    }

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [navbarShown]);

  const toggleNavbar = () => {
    setNavbarShown(!navbarShown);
  };

  return (
    <nav
      aria-label="Site Nav"
      className={clsx(`flex items-center justify-between max-w-8xl px-8 py-4 mx-auto slow duration-100 fixed w-screen top-0 z-10 drop-shadow-sm`, theme.name === "light" ? "bg-white" : "bg-black",)}
      style={{ height: navHeight }}
    >
      <NavLink
        to="/"
      >
        <img
          src="https://user-images.githubusercontent.com/88102392/233238344-b05e3c5d-178e-4a7b-9757-60063fb0f969.png"
          className="inline-flex h-[1] w-10 items-center justify-center rounded-lg"
          alt="Gym Junkies logo"
          loading="lazy"
        ></img>
      </NavLink>

      <ul
        ref={navbarRef}
        className={clsx(
          `fixed sm:static top-20 z-10 gap-2 text-md w-full sm:flex sm:flex-row sm:justify-between sm:w-fit flex-col sm:bg-inherit items-center justify-between nav-menu`,
          navbarShown ? "navbar-shown" : "navbar-hidden",
          theme.name === "light" ? "bg-white" : "bg-black",
        )}
        onClick={toggleNavbar}
      >
        <li className="nav-item text-center">
          <NavLink
            to="/"
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink
            to="/Trainers"
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            Trainers
          </NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink
            to="/Membership"
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            Membership
          </NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink
            to="/About"
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink
            to="/GuidePage"
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            Guide
          </NavLink>
        </li>
        <li className="nav-item text-center">

          <NavLink
            to="/SchedulePage"
            className={({ isActive }) => navLinkClass(isActive, theme)}
          >
            Schedule
          </NavLink>
        </li>
      </ul>
      <button onClick={toggleTheme} className="text-2xl">
        <img src={theme.icon} alt="" className=" aspect-square w-10" />
      </button>

      <div
        className={clsx("hamburger cursor-pointer", navbarShown && "active")}
        onClick={toggleNavbar}
      >
        <span
          className={clsx(
            "bar",
            theme.name === "light" ? "bg-black" : "bg-white"
          )}
        ></span>
        <span
          className={clsx(
            "bar",
            theme.name === "light" ? "bg-black" : "bg-white"
          )}
        ></span>
        <span
          className={clsx(
            "bar",
            theme.name === "light" ? "bg-black" : "bg-white"
          )}
        ></span>
      </div>
    </nav>
  );
}
