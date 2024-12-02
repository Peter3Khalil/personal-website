'use client';
import { ComputerIcon } from '@/components/shared/icons';
import ThemeSwitcher from '@/components/theme-switcher';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Download, Menu } from 'lucide-react';
import React, { FC, useState } from 'react';
const SECTIONS = [
  'home',
  'skills',
  'experience',
  'about',
  'projects',
  'contact',
];

const Header: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        'container sticky top-0 z-50 flex items-center justify-between border-b border-muted bg-background py-4 text-foreground md:py-6',
        className,
      )}
      {...props}
    >
      <a href="#" className="flex items-center gap-3">
        <ComputerIcon className="size-6 dark:*:stroke-primary-foreground md:size-10" />
        <span className="text-xl font-bold">Peter</span>
      </a>
      <nav className="hidden md:block">
        <ul className="flex items-center font-medium capitalize md:gap-4 md:text-sm lg:gap-8 lg:text-lg">
          {SECTIONS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(`#${item.toLowerCase().replace(' ', '-')}`)
                    ?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Button className="hidden font-semibold md:flex">
          Resume <Download className="ms-1" size={20} />
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent className="flex flex-col dark:border-input">
            <nav className="mt-8">
              <ul className="flex flex-col gap-2 font-medium capitalize">
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
      </div>
    </header>
  );
};

export default Header;
