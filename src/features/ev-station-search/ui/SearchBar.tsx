import { FormEvent, useEffect, useRef, useState } from "react";

import { OperatingInstitutionDto } from "@/entities/ev-station/operating-institution";
import { RequestFetchListDto } from "@/entities/ev-station/station/api/types.ts";

import IC_Arrow from "@/shared/assets/icons/ic-arrow-black.svg";
import { Button } from "@/shared/ui";

type SearchBarProps = {
  data: OperatingInstitutionDto[];
  onSearch: (
    data: Partial<
      Pick<
        RequestFetchListDto,
        "evStationName" | "evStationAddress" | "operatingInstitutionList"
      >
    >,
  ) => void;
};

export const SearchBar = ({ data, onSearch }: SearchBarProps) => {
  const dropMenuRef = useRef<HTMLDivElement | null>(null);
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);

  const evStationNameRef = useRef<HTMLInputElement | null>(null);
  const evStationAddressRef = useRef<HTMLInputElement | null>(null);
  const [currentOperatingInsList, setCurrentOperatingInsList] = useState<
    OperatingInstitutionDto[] | []
  >([]);

  useEffect(() => {
    // 외부 영역 클릭 감지
    const handleOutsideClose = (e: { target: any }) => {
      if (dropMenuRef.current && !dropMenuRef.current.contains(e.target))
        setIsSelectBoxOpen(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [isSelectBoxOpen]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch({
      evStationName: evStationNameRef.current?.value,
      evStationAddress: evStationAddressRef.current?.value,
      operatingInstitutionList: currentOperatingInsList.map(
        (item) => item.value,
      ),
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray300">
      <form
        className="flex items-center justify-between py-2 px-5 text-sm gap-5"
        onSubmit={handleSearch}
      >
        <div className="flex-1 flex items-center gap-5">
          <label>충전소 이름</label>
          <input
            type="text"
            className="bg-[#f0f3f5] p-2 rounded flex-1 outline-none h-10"
            placeholder="충전소 이름을 입력해 주세요."
            ref={evStationNameRef}
          />
        </div>
        <div className="flex-1 flex items-center gap-5">
          <label>운영기관</label>
          <div className="flex-1 w-full relative" ref={dropMenuRef}>
            <div
              onClick={() => setIsSelectBoxOpen((prevState) => !prevState)}
              className="bg-[#f0f3f5] p-2 rounded h-10 cursor-pointer flex justify-between items-center"
            >
              <ul className="h-full flex gap-2 text-xs">
                {!currentOperatingInsList.length ? (
                  <li>
                    <p className="px-2 py-1 bg-[#bbdefb] rounded h-full">
                      전체
                    </p>
                  </li>
                ) : (
                  <>
                    {currentOperatingInsList.slice(0, 1).map((item) => (
                      <li key={item.value}>
                        <p className="px-2 py-1 bg-[#bbdefb] rounded h-full">
                          {item.label}
                        </p>
                      </li>
                    ))}
                    {!!currentOperatingInsList.slice(1).length && (
                      <li>
                        <p className="px-2 py-1 bg-[#bbdefb] rounded h-full">
                          그 외 {currentOperatingInsList.slice(1).length}
                        </p>
                      </li>
                    )}
                  </>
                )}
              </ul>
              <img
                src={IC_Arrow}
                alt="arrow"
                className={`transition ${isSelectBoxOpen ? "[transform:rotateZ(180deg)]" : ""}`}
              />
            </div>

            {isSelectBoxOpen && (
              <div className="bg-white rounded shadow-md overflow-hidden absolute left-0 w-full">
                <ul>
                  {data.map((item) => (
                    <li className="" key={item.value}>
                      <button
                        type="button"
                        className={`p-3 cursor-pointer w-full text-left ${
                          currentOperatingInsList.some(
                            (prevItem) => prevItem.value === item.value,
                          )
                            ? "text-secondary hover:bg-[#bbdefb54]"
                            : "hover:bg-gray200"
                        }`}
                        onClick={() =>
                          setCurrentOperatingInsList((prevList) => {
                            const newState = prevList.filter(
                              (prevItem) => prevItem.value !== item.value,
                            );

                            if (
                              prevList.some(
                                (prevItem) => prevItem.value === item.value,
                              )
                            )
                              return newState;

                            return [...newState, item];
                          })
                        }
                      >
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 flex items-center gap-5">
          <label>충전소 주소</label>
          <input
            type="text"
            className="bg-[#f0f3f5] p-2 rounded flex-1 outline-none"
            placeholder="충전소 주소를 입력해 주세요."
            ref={evStationAddressRef}
          />
        </div>
        <div>
          <Button type="submit" color="secondary">
            검색
          </Button>
        </div>
      </form>
    </div>
  );
};
