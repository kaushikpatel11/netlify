// Build-In
import React from "react";

// Internal
import { UserContext } from "../../Context/JobDataContext";
import netlify from "../../assets/icon/netlify.png";
import { CARD_DATA } from "../../consts/common";
import Button from "../../common/Button";

const JobCards = () => {
  const jobList = React.useContext(UserContext);
  return (
    <div className="flex w-full gap-10 flex-wrap justify-center items-center">
      {jobList.map((item, index) => {
        return (
          <div
            className="border border-[#DADEDF] rounded-[10px] w-[45%] flex py-4 px-6 gap-2 bg-white"
            key={index}
          >
            <div className="w-12 h-12 rounded-[5px]">
              <img
                src={netlify}
                alt="Not found"
                className="object-cover w-12 h-12 rounded-[5px]"
              />
            </div>
            <div className="flex flex-col gap-6 w-full">
              <div className="items-start flex flex-col w-full">
                <div className="text-2xl font-normal text-[#000] w-[90%] truncate flex items-start">
                  {item.jobTitle ? item.jobTitle : "-"}
                </div>
                <div className="text-base font-normal text-[#000] w-[90%] truncate flex items-start">
                  {item.companyName ? item.companyName : "-"} -
                  {item.industry ? item.industry : "-"}
                </div>
                <div className="text-base font-normal text-[#646464] w-[90%] truncate flex items-start">
                  {item.location ? item.location : "-"} (
                  {item.remoteType ? item.remoteType : "-"})
                </div>
              </div>
              <div className="items-start flex flex-col gap-2 w-full">
                <div className="text-base font-normal text-[#212427] flex items-start">
                  {CARD_DATA.PART_TIME} {CARD_DATA.TIME}
                </div>
                <div className="text-base font-normal text-[#212427] flex items-start">
                  {CARD_DATA.EXPERIENCE} (
                  {item.minExperience ? item.minExperience : "-"} -
                  {item.maxExperience ? item.maxExperience : "-"}
                  {CARD_DATA.YEARS})
                </div>
                <div className="text-base font-normal text-[#212427] flex items-start">
                  {CARD_DATA.INR} {item.minSalary ? item.minSalary : "-"} -{" "}
                  {item.maxSalary ? item.maxSalary : "-"} / {CARD_DATA.MONTH}
                </div>
                <div className="text-base font-normal text-[#212427] flex items-start">
                  0 - {item.totalEmployee ? item.totalEmployee : "-"}{" "}
                  {CARD_DATA.EMPLOYEES}
                </div>
              </div>
              <div className="items-start flex flex-col gap-2">
                {item.applyType === "quickApply" && (
                  <Button
                    name={CARD_DATA.APPLY_NOW}
                    className={"py-2 px-4 bg-[#00a1ff] text-white rounded-md"}
                  />
                )}
                {item.applyType === "externalApply" && (
                  <Button
                    name={CARD_DATA.EXTERNAL_APPLY}
                    className={
                      "py-2 px-4 bg-white text-[#00a1ff] rounded-md border border-[#00a1ff]"
                    }
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobCards;
