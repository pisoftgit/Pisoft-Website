"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavbarMenu";
import { cn } from "../../lib/util";
import { useNavigate } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-end justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    setActive(null); // Close menus after click
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-screen mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          item="Home"
          onClick={() => handleNavClick("/")}
        />
        <MenuItem
          setActive={setActive}
          item="About"
          onClick={() => handleNavClick("/about")}
        />

        <MenuItem setActive={setActive} active={active} item="ERP Services">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink onClick={() => { handleNavClick("/ERPservices/Education") }}>Education</HoveredLink>
            <HoveredLink  onClick={() => { handleNavClick("/ERPservices/Finance") }}>Finance</HoveredLink>
            <HoveredLink onClick={() => { handleNavClick("/ERPservices/Medical&Healthcare") }}>Medical and Helathcare</HoveredLink>
            <HoveredLink onClick={() => { handleNavClick("/ERPservices/AutoMobile") }}>AutoMobile</HoveredLink>
            <HoveredLink onClick={() => { handleNavClick("/ERPservices/TourTravels") }}>Tours and Travels</HoveredLink>
            <HoveredLink onClick={() => { handleNavClick("/ERPservices/Services") }}>Services</HoveredLink>
          </div> */}
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Education"
              onClick={() => { handleNavClick("/ERPservices/Education") }}
              src="/esmeHome.PNG"
              description="Connecting Campus, Anywhere. Anytime"
            />
            <ProductItem
              title="Finance"
              onClick={() => { handleNavClick("/ERPservices/Finance") }}
              src="/esmeHome.PNG"
              description="Effortless Management for Cooperative Success."
            />
            <ProductItem
              title="Medical"
              onClick={() => { handleNavClick("/ERPservices/Medical&Healthcare") }}
              src="/esmeHome.PNG"
              description="Precision Care Through Smart Management."
            />
            <ProductItem
              title="Automobile"
              onClick={() => { handleNavClick("/ERPservices/AutoMobile") }}
              src="/esmeHome.PNG"
              description="Streamlining Workshop Management, One Click at a Time."
            />
            <ProductItem
              title="Tours and Travels"
              onClick={() => { handleNavClick("/ERPservices/TourTravels") }}
              src="/esmeHome.PNG"
              description="Manage Fleets. Optimize Routes. Deliver Smarter."
            />
            <ProductItem
              title="Services"
              onClick={() => { handleNavClick("/ERPservices/Services") }}
              src="/esmeHome.PNG"
              description="One Solution for Every Customer Connection."
            />
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          item="Internship"
          onClick={() => handleNavClick("/IntershipProgram")}
        />
        <MenuItem
          setActive={setActive}
          item="Contact"
          onClick={() => handleNavClick("/contact")}
        />
      </Menu>
    </div>
  );
}
