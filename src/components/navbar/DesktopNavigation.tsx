"use client";

import { NavLinks } from "./NavLinks";

export const DesktopNavigation = () => {
  return (
    <ul className="hidden  items-center md:flex gap-2 lg:gap-4 xl:gap-6">
      <NavLinks />
    </ul>
  );
};
