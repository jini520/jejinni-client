"use client";

import React, { useEffect, useState } from "react";
import "./nav.scss";
import Jieut from "public/icons/jieut.svg";
import Mieum from "public/icons/mieum.svg";
import classnames from "classnames";
import Link from "next/link";
import HamburgerIcon from "public/icons/hamburger.svg";

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
    id: "awards",
    label: "자격/수상",
    href: "#awards",
  },
];

const Nav = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

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

  return (
    <nav className="nav">
      {/* <ul className="nav-container"> */}
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
      <button className="nav-hamburger">
        <HamburgerIcon width={24} height={24} />
      </button>
    </nav>
  );
};

export default Nav;
