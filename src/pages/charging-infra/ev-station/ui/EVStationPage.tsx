import { EvStationView } from "@/features/ev-station-view";

export const EVStationPage = () => {
  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold mb-6">충전소 관리</h1>
      <EvStationView />
    </div>
  );
};
