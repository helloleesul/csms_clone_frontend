import OCPP_LOGO_1 from "@/shared/assets/logo/ci-ocpp-1.6.png";
import OCPP_LOGO_2 from "@/shared/assets/logo/ci-ocpp-2.0.1.png";

export const SectionHero = () => {
  return (
    <section
      className="flex-1 relative before:bg-dark before:bg-opacity-70 before:absolute before:left-0 before:top-0 before:h-full before:w-full
      bg-[url('@/shared/assets/images/login-layout-bg.png')] bg-cover w-full h-full lg:flex flex-col justify-center items-center hidden"
    >
      <div className="absolute top-10 left-10 flex items-center gap-2">
        <div>
          <img src={OCPP_LOGO_1} alt="ocpp(1.6) logo" className="h-12" />
        </div>
        <div>
          <img src={OCPP_LOGO_2} alt="ocpp(2.0.1) logo" className="h-8" />
        </div>
        <p className="text-white font-gotham text-sm ml-2 leading-tight">
          Fully Certificate <br />
          OCPP 1.6 & OCPP 2.0.1
        </p>
      </div>
      <div className="absolute text-white mb-10 font-light">
        <h1 className="text-5xl leading-tight">
          스마트한 EV를 위한 <br />
          <span className="font-bold">충전인프라 통합관제서비스</span>
        </h1>
        <p className="text-xl font-gotham mt-8">
          EVIQ is an all-in-one EV information and charging platform.
        </p>
      </div>
    </section>
  );
};
