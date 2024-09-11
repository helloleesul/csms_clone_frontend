import {
  OPERATING_STATUS_DATA,
  OperatingStatisticType,
  StationOperatingStatusEnum,
} from "@/entities/ev-station/station";

type FilterItemsProps = {
  data: OperatingStatisticType;
  currentOperatingStatus?: StationOperatingStatusEnum;
  setOperatingStatus: (key?: number) => void;
};

export const FilterItems = ({
  data,
  currentOperatingStatus,
  setOperatingStatus,
}: FilterItemsProps) => {
  return (
    <div className="flex gap-2 items-center">
      {Object.entries(data).map(([key, value], index) => {
        // key: operating, pause, stop
        // value: 갯수
        const isActiveStatus = currentOperatingStatus === index;

        return (
          <button
            type="button"
            value={key}
            key={key}
            className={`${isActiveStatus ? "bg-[#bbdefb] border-secondary" : "bg-white border-gray300"} rounded-lg p-4 w-48 flex items-center justify-between text-lg border`}
            onClick={() =>
              setOperatingStatus(isActiveStatus ? undefined : index)
            }
          >
            <span>
              {/* 운영중, 임시중지, 영구중지 */}
              {OPERATING_STATUS_DATA[index].description}
            </span>
            <span
              className={`font-bold ${"stop" === key ? "text-danger" : ""}`}
            >
              {value}
            </span>
          </button>
        );
      })}
    </div>
  );
};
