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
      name: "Internship",
      link: "/IntershipProgram",
    },
    {
      name: "E-Brochure",
      children: [
        {
          name: "Java",
          children: [
            { name: "45 Days", link: "/about#our-mission" },
            { name: "6 Months", link: "/about#our-vision" },
          ],
        },
        {
          name: "AI/ML",
          children: [
            { name: "45 Days", link: "#" },
            { name: "6 Months", link:"#" },
          ],
        },{
          name: "Python",
          children: [
            { name: "45 Days", link: "#" },
            { name: "6 Months", link:"#" },
          ],
        },{
          name: "Data Science",
          children: [
            { name: "45 Days", link: "#" },
            { name: "6 Months", link:"#" },
          ],
        },{
          name: "MERN",
          children: [
            { name: "45 Days", link: "#" },
            { name: "6 Months", link:"#" },
          ],
        },
      ],
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
    {
      name: "Contact Us",
      link: "/contact",
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
