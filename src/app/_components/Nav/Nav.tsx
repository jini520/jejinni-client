"use client";

import React, { useEffect, useState } from "react";
import Jieut from "public/icons/jieut.svg";
import Mieum from "public/icons/mieum.svg";
import classnames from "classnames";
import Link from "next/link";
import HamburgerIcon from "public/icons/hamburger.svg";
import LiquidGlass from "../LiquidGlass/LiquidGlass";
import { useRouter } from "next/navigation";
import "./nav.scss";

const navItems = [
  {
    id: "skills",
    label: "기술",
    href: "#skills",
  },
  {
    id: "career",
    label: "경력",
    href: "#career",
  },
  {
    id: "projects",
    label: "프로젝트",
    href: "#projects",
  },
  {
    id: "education",
    label: "교육",
    href: "#education",
  },
  {
    id: "certifications",
    label: "자격/수상",
    href: "#certifications",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50px 0px -50px 0px",
        threshold: 0.6,
      }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClickHamburger = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickNavItem = (href: string) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <nav
      className={classnames("nav", {
        "nav--open": isMenuOpen,
      })}
    >
      <LiquidGlass className="nav-wrapper">
        <div className="nav-inner">
          <Link href="" className="logo">
            <Jieut color="var(--color-primary-orange)" />
            <span></span>
            <Jieut color="var(--color-primary-green)" />
            <Mieum color="var(--color-primary-blue)" />
          </Link>
          {navItems.map((item) => (
            <Link
              href={item.href}
              className={classnames("nav-item", {
                active: activeItem === item.id,
              })}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
          <button className="nav-hamburger" onClick={handleClickHamburger}>
            <HamburgerIcon
              width={24}
              height={24}
              color="var(--color-text-primary)"
            />
          </button>
        </div>
      </LiquidGlass>
      <LiquidGlass
        className={classnames("nav__dropdown", {
          "nav__dropdown--open": isMenuOpen,
        })}
      >
        <div className="nav__dropdown-items">
          {navItems.map((item) => (
            <Link
              href={item.href}
              className={classnames("nav__dropdown-item", {
                active: activeItem === item.id,
              })}
              key={item.label}
              onClick={() => handleClickNavItem(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </LiquidGlass>
    </nav>
  );
};

export default Nav;
