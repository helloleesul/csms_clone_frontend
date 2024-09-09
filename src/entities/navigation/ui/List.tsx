import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { NAVIGATION_LIST } from "@/shared/consts/navigationList.ts";

import { MainItem } from "./MainItem.tsx";
import { SubItem } from "./SubItem.tsx";

export const List = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleToggle = (itemPath: string) => {
    setExpandedItem((prev) => (prev === itemPath ? null : itemPath));
  };

  const isExpanded = (itemPath: string) => {
    return currentPath.startsWith(itemPath) || expandedItem === itemPath;
  };

  return (
    <ul className="px-5 flex flex-col gap-3">
      {NAVIGATION_LIST.map((item) => (
        <li key={item.label}>
          <div
            onClick={() =>
              item.subMenu ? handleToggle(item.path) : navigate(item.path)
            }
          >
            <MainItem {...item} isExpanded={isExpanded(item.path)} />
          </div>

          {item.subMenu && (
            <ul
              className={`transition-[max-height] overflow-hidden mt-2 ${isExpanded(item.path) ? "max-h-[1000px]" : "max-h-0"}`}
            >
              {item.subMenu.map((subItem) => (
                <li key={subItem.label}>
                  <Link to={subItem.path}>
                    <SubItem
                      label={subItem.label}
                      isActive={currentPath === subItem.path}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
