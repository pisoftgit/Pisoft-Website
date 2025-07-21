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
      children: [
        { name: "Our Mission", link: "/about#our-mission" },
        { name: "Our Vision", link: "/about#our-vision" },
      ],
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Internship",
      link: "/IntershipProgram",
    },
    {
      name: "E-Brochure",
      link: "/E-Brochure",
    },
    {
      name: "ERP Services",
      children: [
        { name: "Education", link: "/ERPservices/Education" },
        { name: "Finance", link: "/ERPservices/Finance" },
        { name: "Medical and Healthcare", link: "/ERPservices/Medical&Healthcare" },
        { name: "AutoMobile", link: "/ERPservices/AutoMobile" },
        { name: "Tours & Travels", link: "/ERPservices/TourTravels" },
        { name: "Services", link: "/ERPservices/Services" },
      ],
    },
  ];


  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo className="mr-10" />
          <NavItems items={navItems} />
        </NavBody>
      </Navbar>
    </div>
  );
}
