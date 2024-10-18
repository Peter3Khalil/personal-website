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
      <span className="flex items-center gap-3">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path d="M31.5294 14.2118C31.5294 18.8819 28.7623 22.9082 24.7793 24.7351C26.4612 23.3496 27.5322 21.248 27.5322 18.896C27.5322 14.7642 24.2259 11.4042 20.112 11.3205C20.0574 11.3167 20.0075 11.3167 19.9529 11.3167C19.8983 11.3167 19.8485 11.3167 19.7939 11.3205C18.2673 11.4033 17.0588 12.6663 17.0588 14.2108V28.6814C17.0588 33.4748 13.1699 37.3638 8.37646 37.3638V14.2118C8.37646 7.81928 13.5605 2.63528 19.9529 2.63528C26.3454 2.63528 31.5294 7.81928 31.5294 14.2118Z" />
          <path d="M21.9992 16.2582C23.1294 15.128 23.1294 13.2956 21.9992 12.1654C20.8689 11.0351 19.0365 11.0351 17.9063 12.1654C16.7761 13.2956 16.7761 15.128 17.9063 16.2582C19.0365 17.3884 20.8689 17.3884 21.9992 16.2582Z" />
        </svg>
        <span className="text-xl font-bold">Peter</span>
      </span>
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
