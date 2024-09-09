type SubItemProps = {
  label: string;
  isActive: boolean;
};

export const SubItem = ({ label, isActive }: SubItemProps) => {
  return (
    <div
      className={`hover:text-secondary transition-[color] py-4 px-5 rounded-lg ml-[35px] ${isActive ? "text-secondary" : "text-white"}`}
    >
      <span className="font-medium">{label}</span>
    </div>
  );
};
