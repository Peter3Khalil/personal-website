import { ComputerIcon } from '@/components/shared/icons';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';

const Footer: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <footer
      className={cn(
        'dark-container flex flex-wrap items-center justify-between gap-8 py-8',
        className,
      )}
      {...props}
    >
      <a href="#" className="flex items-center gap-3">
        <ComputerIcon className="size-6 *:stroke-primary-foreground md:size-10" />
        <span className="text-lg font-bold sm:text-xl">Peter</span>
      </a>
      <p className="text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Peter. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
