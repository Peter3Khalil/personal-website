'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Download, Menu } from 'lucide-react';
import { useState } from 'react';
const SECTIONS = ['About Me', 'Skills', 'Projects', 'Contact Me'];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container flex items-center justify-between border-b border-muted bg-background py-4 text-foreground md:py-6">
      <a href="#" className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="Computer"
          className="size-6 md:size-10"
        >
          <rect
            width="23"
            height="17"
            x=".5"
            y="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            rx="1.5"
            ry="1.5"
            className="colorStroke303c42 svgStroke stroke-primary"
          ></rect>
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.5 18.5s.21 4-2 4h9c-2.21 0-2-4-2-4M.5 14.5h23"
            className="colorStroke303c42 svgStroke stroke-primary"
          ></path>
          <circle
            cx="12"
            cy="16.5"
            r=".5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="colorStroke303c42 svgStroke stroke-primary"
          ></circle>
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.5 5.5 6.5 8l3 2.5M14.5 5.5l3 2.5-3 2.5M10.5 11.5l3-7"
            className="colorStroke303c42 svgStroke stroke-primary"
          ></path>
        </svg>
        <span className="text-xl font-bold">Peter</span>
      </a>
      <nav className="hidden md:block">
        <ul className="flex items-center font-medium md:gap-4 md:text-base lg:gap-8 lg:text-lg">
          {SECTIONS.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Button className="hidden font-semibold md:flex">
        Resume <Download className="ms-1" size={20} />
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <nav className="mt-8">
            <ul className="flex flex-col gap-2 font-medium">
              {SECTIONS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="block rounded p-2 hover:bg-muted"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-1 items-end">
            <Button className="w-full font-semibold">
              Resume <Download className="ms-1" size={20} />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
