import { BrandLogo } from '../common/BrandLogo';
import { NavbarScrolled } from './NavbarScrolled';
import { Navigation } from './Navigation';

export const NavbarSection = () => {
  return (
    <NavbarScrolled>
      <BrandLogo isAnimated />
      <Navigation />
    </NavbarScrolled>
  );
};
