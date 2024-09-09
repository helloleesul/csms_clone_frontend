import IC_ArrowDown from "@/shared/assets/icons/ic-arrow-down.svg";
import IC_ArrowUp from "@/shared/assets/icons/ic-arrow-up.svg";

type MainItemProps = {
  label: string;
  icon: string;
  subMenu?: { label: string; path: string }[];
  isExpanded: boolean;
};

export const MainItem = ({
  label,
  icon,
  subMenu,
  isExpanded,
}: MainItemProps) => {
  return (
    <div
      className={`flex justify-between text-white hover:bg-secondary transition-[background] py-4 px-5 w-full rounded-lg ${isExpanded ? "bg-secondary" : ""}`}
    >
      <div className="flex gap-3">
        <img src={`/src/shared/assets/icons/${icon}.svg`} alt={label} />
        <span className="font-bold">{label}</span>
      </div>
      {subMenu && (
        <img src={isExpanded ? IC_ArrowUp : IC_ArrowDown} alt="arrow" />
      )}
    </div>
  );
};
