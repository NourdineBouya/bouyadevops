"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="py-4 bg-white shadow-sm px-6 md:px-20 flex justify-between items-center">
      {/* Logo */}
      <Link className="text-2xl font-extrabold" href="/">
        Devops
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 items-center">
        <Link href="/">Accueil</Link>
        <Link href="/">Collaboration</Link>
        <Link href="/">Nos Projets</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Mobile Sheet Menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left" className="space-y-4 mt-8">
            <Link href="/" onClick={handleClose} className="block text-lg">
              Accueil
            </Link>
            <Link href="/" onClick={handleClose} className="block text-lg">
              Collaboration
            </Link>
            <Link href="/" onClick={handleClose} className="block text-lg">
              Nos Projets
            </Link>
            <Link href="/contact" onClick={handleClose} className="block text-lg">
              Contact
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
