// Sidebar.jsx
"use client";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "../lib/util";

const SidebarContext = createContext(undefined);
export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within a SidebarProvider");
  return ctx;
};

export const SidebarProvider = ({ children, open: openProp, setOpen: setOpenProp, animate = true }) => {
  const [openState, setOpenState] = useState(false);
  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children, open, setOpen, animate }) => (
  <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
    {children}
  </SidebarProvider>
);

export const SidebarBody = (props) => (
  <>
    <DesktopSidebar {...props} />
    <MobileSidebar {...props} />
  </>
);

const DesktopSidebar = ({ className, children, ...props }) => {
  const { open, setOpen, animate } = useSidebar();

  const sidebarWidth = animate ? (open ? "300px" : "90px") : "300px";
  const sidebarBg = animate ? (open ? "#162556" : "#ffffff") : "#162556"; 

  return (
    <motion.div
      className={cn(
        "px-4 py-4 mr-4 hidden md:flex md:flex-col text-[#F07C22] w-[300px] shrink-0 font-jSB",
        className
      )}
      animate={{
        width: sidebarWidth,
        backgroundColor: sidebarBg
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};


const MobileSidebar = ({ className, children, ...props }) => {
  const { open, setOpen } = useSidebar();

  return (
    <>
      {/* Always-visible 5% mini sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[10%] bg-blue-950 z-[50] flex items-center justify-center md:hidden",
          className
        )}
        {...props}
      >
        <IconMenu2
          className="text-[#F07C22] cursor-pointer"
          size={24}
          onClick={() => setOpen(true)}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-blue-950 z-[100] p-10 flex flex-col md:hidden"
          >
            <IconX
              className="absolute top-6 right-6 text-[#F07C22] cursor-pointer"
              size={24}
              onClick={() => setOpen(false)}
            />
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};



export const SidebarLink = ({ link, className, ...props }) => {
  const { open, animate } = useSidebar();
  return (
    <a
      href={link.href}
      className={cn(
        "flex items-center gap-2 py-2 rounded-md px-2 hover:bg-orange-100 transition-all duration-150 font-jSB text-orange-300",
        className
      )}
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="whitespace-pre transition group-hover:translate-x-1"
      >
        {link.label}
      </motion.span>
    </a>
  );
};
