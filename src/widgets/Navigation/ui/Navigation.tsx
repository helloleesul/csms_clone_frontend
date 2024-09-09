import { List } from "@/entities/navigation";

import EVIQ_LOGO from "@/shared/assets/logo/ci-eviq-csms-small.svg";

export const Navigation = () => {
  return (
    <section className="bg-primary py-12 w-[320px] h-full">
      <div className="text-center mb-6">
        <img src={EVIQ_LOGO} alt="eviq logo" className="m-auto" />
        <span className="text-xl font-gotham text-white font-light">
          ver 1.8.3
        </span>
      </div>
      <List />
    </section>
  );
};
