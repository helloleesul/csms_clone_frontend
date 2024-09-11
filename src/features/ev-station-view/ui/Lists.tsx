import { useEffect, useRef, useState } from "react";

import {
  OPERATING_STATUS_DATA,
  USER_LIMIT_DATA,
  ResponseFetchListDto,
} from "@/entities/ev-station/station";

import IC_Arrow from "@/shared/assets/icons/ic-arrow-black.svg";

export const Lists = ({
  data,
  pagination,
}: {
  data: ResponseFetchListDto["resultData"]["contents"];
  pagination: ResponseFetchListDto["resultData"]["pagination"];
}) => {
  const dropMenuRef = useRef<HTMLDivElement | null>(null);
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);

  const [currentRowPerPage, setCurrentRowPerPage] = useState(
    pagination.rowsPerPage,
  );

  useEffect(() => {
    // 외부 영역 클릭 감지
    const handleOutsideClose = (e: { target: any }) => {
      if (dropMenuRef.current && !dropMenuRef.current.contains(e.target))
        setIsSelectBoxOpen(false);
    };
    document.addEventListener("click", handleOutsideClose);

    return () => document.removeEventListener("click", handleOutsideClose);
  }, [isSelectBoxOpen]);

  return (
    <div>
      <div className="bg-white rounded-lg border border-gray300 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray0">
            <tr>
              <td>No</td>
              <td>운영기관</td>
              <td>충전소 이름</td>
              <td>주소</td>
              <td>공용 구분</td>
              <td>운영 상태</td>
              <td>등록일</td>
            </tr>
          </thead>
          <tbody>
            {!data.length && (
              <tr>
                <td>
                  <p>데이터가 없습니다.</p>
                </td>
              </tr>
            )}
            {data.map((item) => (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.operatingInstitution}</td>
                <td>{item.evStationName}</td>
                <td>
                  {item.address.main}
                  {item.address.detail && `, ${item.address.detail}`}
                </td>
                <td>{USER_LIMIT_DATA[item.userLimit.item].description}</td>
                <td>
                  {OPERATING_STATUS_DATA[item.operatingStatus].description}
                </td>
                <td>
                  {new Date(item.registerDate).toISOString().split("T")[0]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-3 justify-end text-xs p-3 items-center">
        <div className="flex gap-3 items-center">
          <span>페이지 당 개수: </span>
          <div className="flex-1 w-full relative" ref={dropMenuRef}>
            <div
              onClick={() => setIsSelectBoxOpen((prevState) => !prevState)}
              className="bg-gray100 py-2 px-4 w-16 rounded cursor-pointer flex justify-between items-center gap-2"
            >
              <p>{currentRowPerPage}</p>
              <img
                src={IC_Arrow}
                alt="arrow"
                className={`transition ${isSelectBoxOpen ? "[transform:rotateZ(180deg)]" : ""}`}
              />
            </div>
            {isSelectBoxOpen && (
              <div className="bg-white rounded shadow-md overflow-hidden absolute w-full">
                <ul>
                  {[10, 20, 30, 40, 50].map((item, index) => (
                    <li className="" key={index}>
                      <button
                        type="button"
                        className={`px-4 py-2 cursor-pointer w-full text-left ${
                          currentRowPerPage === item
                            ? "text-secondary hover:bg-[#bbdefb54]"
                            : "hover:bg-gray200"
                        }`}
                        onClick={() => {
                          setCurrentRowPerPage(item);
                          setIsSelectBoxOpen(false);
                        }}
                      >
                        <span>{item}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <span>
          {pagination.rowsNumber} 중 {pagination.page}-{pagination.rowsNumber}
        </span>
      </div>
    </div>
  );
};
