"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "../ResizableNavbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Internship",
      link: "/IntershipProgram",
    },
  ];


  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo className="mr-10"/>
          <NavItems items={navItems} />
        </NavBody>
      </Navbar>
    </div>
  );
}
