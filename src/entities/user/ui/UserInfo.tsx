import IC_Account from "@/shared/assets/icons/ic-account-circle.svg";
import useUserStore from "@/shared/model/useUserStore.ts";

export const UserInfo = () => {
  const userId = useUserStore((state) => state.userId);
  return (
    <div className="flex items-center gap-2">
      <img src={IC_Account} alt="user icon" />
      <span className="font-bold text-lg">{userId}</span>
    </div>
  );
};
