import IC_Arrow from "@/shared/assets/icons/ic-arrow-white.svg";

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
    // TODO: hover 색상 수정하기
    <div
      className={`flex justify-between text-white hover:bg-secondary transition-[background] py-4 px-5 w-full rounded-lg ${isExpanded ? "bg-secondary" : ""}`}
    >
      <div className="flex gap-3">
        <img src={`/src/shared/assets/icons/${icon}.svg`} alt={label} />
        <span className="font-bold">{label}</span>
      </div>
      {subMenu && (
        <img
          src={IC_Arrow}
          alt="arrow"
          className={`transition ${isExpanded ? "[transform:rotateZ(180deg)]" : ""}`}
        />
      )}
    </div>
  );
};
