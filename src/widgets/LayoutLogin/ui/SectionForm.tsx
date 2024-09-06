import { LoginForm } from "@/features/auth";

import EVIQ_LOGO from "@/shared/assets/logo/ci-eviq-large.png";

export const SectionForm = () => {
  return (
    <section className="lg:w-1/3 w-full bg-dark">
      <div className="flex flex-col justify-center items-center h-full">
        <header className="mb-12">
          <div>
            <img src={EVIQ_LOGO} width={198} alt="eviq logo" />
          </div>
          <p className="text-white text-2xl mt-4">관리자시스템 로그인</p>
        </header>

        <LoginForm />

        <span className="text-[#b6bbc9] font-gotham text-sm font-light mt-6">
          02-2125-4060
        </span>
        <footer className="text-white font-gotham font-extralight text-sm absolute bottom-9">
          All Rights Reserved with <span className="font-bold">EVIQ</span>
        </footer>
      </div>
    </section>
  );
};
