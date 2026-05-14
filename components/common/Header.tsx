import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const navItemInfo = [
  {
    text: "個人開発",
    link: "#",
  },
  {
    text: "記事",
    link: "#",
  },
  {
    text: "お問い合わせ",
    link: "#",
  },
];

export const Header = () => {
  return (
    <>
      <header className="h-12 flex shadow rounded-md px-3">
        <Logo />
        <NavList navItem={navItemInfo} />
      </header>
    </>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <Image
        src="/header-img.svg"
        width={30}
        height={40}
        alt="ヘッダーのアイコン"
      ></Image>
      <Link href="/" className="font-bold text-lg">
        kandalog
      </Link>
    </div>
  );
};

const NavList = ({ navItem }: { navItem: typeof navItemInfo }) => {
  return (
    <nav className="ml-auto">
      <ul className="flex items-stretch space-x-6 h-full">
        {navItem.map((item) => (
          <NavItem key={item.text} link={item.link}>
            {item.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ children, link }: { children: ReactNode; link: string }) => {
  return (
    <li>
      <a href={link} className="flex items-center h-full text-xs">
        {children}
      </a>
    </li>
  );
};
