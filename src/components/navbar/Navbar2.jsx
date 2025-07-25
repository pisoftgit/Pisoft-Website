"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "../ResizableNavbar";
// import { useState, useEffect } from "react";

export function NavbarDemo() {
  // const [navItems, setNavItems] = useState([
  const navItems= [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      children: [
        { name: "About Us", link: "/about" },
        { name: "Our Mission", link: "/about#our-mission" },
        { name: "Our Vision", link: "/about#our-vision" },
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
      name: "Other Services",
      children: [
        { name: "Web Applications", link: "/ERPservices/Education" },
        { name: "Desktop Applications", link: "/ERPservices/Finance" },
        { name: "Mobile Applications", link: "/ERPservices/Medical&Healthcare" },
        { name: "Graphic Designing", link: "/ERPservices/AutoMobile" },
        { name: "Web Designing", link: "/ERPservices/TourTravels" },
      ],
    },
    {
      name: "Internship",
      link: "/IntershipProgram",
    },
    {
      name: "Gallery",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ]

  // );

  // useEffect(() => {
  //   const fetchBrochureData = async () => {
  //     try {
  //       const res = await fetch("https://project.pisofterp.com/pipl/restworld/courses/technologies/modes/ONLINE");
  //       const data = await res.json();

  //       const brochureGrouped = {};

  //       data.forEach(item => {
  //         const tech = item.technologyName;
  //         const courseName = item.courseName;
  //         const link = item.resource || `/course/${item.courseId}`;

  //         if (!brochureGrouped[tech]) {
  //           brochureGrouped[tech] = [];
  //         }

  //         brochureGrouped[tech].push({
  //           name: courseName,
  //           link,
  //         });
  //       });

  //       const eBrochureChildren = Object.entries(brochureGrouped).map(
  //         ([techName, children]) => ({
  //           name: techName,
  //           children,
  //         })
  //       );

  //       // Update just the E-Brochure section
  //       setNavItems((prevItems) =>
  //         prevItems.map((item) =>
  //           item.name === "E-Brochure"
  //             ? { ...item, children: eBrochureChildren }
  //             : item
  //         )
  //       );
  //     } catch (error) {
  //       console.error("Failed to fetch brochure data", error);
  //     }
  //   };

  //   fetchBrochureData();
  // }, []);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo className="mr-10" />
          <NavItems items={navItems} />
        </NavBody>
      </Navbar>
    </div>
  );
}
