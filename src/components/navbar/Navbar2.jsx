"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
} from "../ResizableNavbar";
import { useState, useEffect } from "react";

export function NavbarDemo() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    const fetchBrochureData = async () => {
      try {
        const res = await fetch("https://project.pisofterp.com/pipl/restworld/courses/technologies/modes/ONLINE"); 
        const data = await res.json();

        const brochureGrouped = {};

        data.forEach(item => {
          const tech = item.technologyName;
          const duration = item.duration;
          const link = item.resource || `/course/${item.courseId}`;

          if (!brochureGrouped[tech]) {
            brochureGrouped[tech] = [];
          }

          brochureGrouped[tech].push({
            name: `${duration} ${item.isCourseDurationInDays ? 'Days' : 'Months'}`,
            link,
          });
        });

        const eBrochureChildren = Object.entries(brochureGrouped).map(
          ([techName, children]) => ({
            name: techName,
            children,
          })
        );

        const updatedNavItems = [
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
            children: eBrochureChildren,
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

        setNavItems(updatedNavItems);
      } catch (error) {
        console.error("Failed to fetch brochure data", error);
      }
    };

    fetchBrochureData();
  }, []);

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
