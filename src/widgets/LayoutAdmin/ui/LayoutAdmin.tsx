import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "@/widgets/Navigation";

import { Logout } from "@/features/logout";

import IC_Menu from "@/shared/assets/icons/ic-menu.svg";
import { IconButton } from "@/shared/ui";

export const LayoutAdmin = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  // TODO: 반응형 축소할 때 menu 닫아두기
  return (
    <div className="flex h-dvh">
      <div
        className={`${menuOpen ? "w-[320px]" : "w-0"} transition-[width] overflow-hidden h-dvh`}
      >
        <Navigation />
      </div>
      <main className="flex-1 p-6 bg-gray200">
        <header className="flex justify-between items-center">
          <IconButton
            imagePath={IC_Menu}
            imageAlt="menu"
            onClick={() => setMenuOpen((prevState) => !prevState)}
          />
          <Logout />
        </header>
        <Outlet />
      </main>
    </div>
  );
};
