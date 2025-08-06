import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
const navItems = [
  { name: "Features", href: "#features-section" },
  { name: "Pricing", href: "#pricing-section" },
  { name: "Testimonials", href: "#testimonials-section" }, // Changed from Docs to Testimonials
];
const Header = () => {
  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-foreground text-xl font-bold">Pointer</span>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // onClick={(e) => handleScroll(e, item.href)} // Add onClick handler
                className="text-[#888888] hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/docs"
            className="text-[#888888] hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors"
          >
            <Button
              variant="default"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-full font-medium shadow-sm"
            >
              Try for Free
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="bg-background border-t border-border text-foreground"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-semibold text-foreground">
                  Navigation
                </SheetTitle>
                <nav className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      //   onClick={(e) => handleScroll(e, item.href)} // Add onClick handler
                      className="text-[#888888] hover:text-foreground justify-start text-lg py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href=""
                    rel="noopener noreferrer"
                    className="w-full mt-4"
                  >
                    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-full font-medium shadow-sm">
                      Try for Free
                    </Button>
                  </Link>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
