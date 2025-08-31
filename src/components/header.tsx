import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from '@iconify/react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState('DE');
  const location = useLocation();
  const logoSrc = `${import.meta.env.BASE_URL}pan_logo.svg`;

  const menuItems = [
    { name: 'Startseite', href: '/' },
    { name: 'Über uns', href: '/about' },
    { name: 'Leistungen', href: '/services' },
    { name: 'Flotte & Equipment', href: '/fleet' },
    { name: 'Referenzen', href: '/references' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLanguageChange = (key: React.Key) => {
    setCurrentLanguage(key as string);
  };

  return (
    <Navbar 
      maxWidth="xl" 
      isBordered 
      isBlurred={false}
      className="bg-white shadow-sm"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="PAN Hamburg Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl text-primary">PAN Hamburg</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={isActive(item.href)}>
            <Link 
              to={item.href}
              className={`text-sm font-medium ${isActive(item.href) ? 'text-primary' : 'text-foreground-700'}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="light" 
                startContent={<Icon icon="lucide:globe" />}
                endContent={<Icon icon="lucide:chevron-down" className="text-xs" />}
                className="text-sm"
              >
                {currentLanguage}
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Language selection" 
              selectionMode="single" 
              selectedKeys={[currentLanguage]}
              onSelectionChange={(keys) => handleLanguageChange(Array.from(keys)[0])}
            >
              <DropdownItem key="DE">Deutsch</DropdownItem>
              <DropdownItem key="EN">English</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button 
            as={Link} 
            to="/contact" 
            color="accent" 
            variant="solid" 
            radius="sm"
            className="font-medium"
            startContent={<Icon icon="lucide:message-square" />}
          >
            Jetzt anfragen
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link 
              to={item.href}
              className={`w-full py-2 ${isActive(item.href) ? 'text-primary font-medium' : 'text-foreground-700'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-4">
          <Button 
            as={Link} 
            to="/contact" 
            color="accent" 
            variant="solid" 
            radius="sm"
            fullWidth
            className="font-medium"
            startContent={<Icon icon="lucide:message-square" />}
            onClick={() => setIsMenuOpen(false)}
          >
            Jetzt anfragen
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
