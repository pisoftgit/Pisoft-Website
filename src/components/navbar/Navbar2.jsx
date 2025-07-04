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
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "ERP Services",
      link: "",
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
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
          </div>
        </NavBody>
      </Navbar>
    </div>
  );
}
