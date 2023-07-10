// Build-In
import React, { useCallback, useContext, useState } from "react";

// Internal
import { UserContext, UserDispatchContext } from "../../Context/JobDataContext";
import { APPLY_TYPE_LIST, CREATE_JOB_MODAL } from "../../consts/common";
import RadioButton from "../RadioButton";
import Textfield from "../Textfield";
import Button from "../Button";

const CreateJobModal = ({ openModal, handleCloseModal }) => {
  const jobDetailsDispatch = useContext(UserDispatchContext);
  const jobDetails = React.useContext(UserContext);

  const [createdJobData, setCreatedJobData] = useState({});
  const [courantStep, setCourantStep] = useState(1);

  const handleOnChange = useCallback((event) => {
    setCreatedJobData((prevCreatedJobData) => {
      return { ...prevCreatedJobData, [event.target.name]: event.target.value };
    });
  }, []);

  const handleCreateJob = () => {
    if (Object.keys(createdJobData).length > 0) {
      const JobData = [...jobDetails];
      JobData.push(createdJobData);
      jobDetailsDispatch(JobData);
    }
    handleCloseModal();
  };

  return (
    <div>
      {openModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[70%] my-6 mx-auto max-w-2xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between pt-8 px-8">
                  <div className="text-xl font-normal text-[#182021]">
                    {CREATE_JOB_MODAL.CREATE_JOB}
                  </div>
                  <div className="text-base font-medium text-[#182021]">
                    {CREATE_JOB_MODAL.STEP} {courantStep}
                  </div>
                </div>

                <div className="relative p-8 flex-auto">
                  {/* Step 1 */}
                  {courantStep === 1 && (
                    <div className="flex flex-col gap-6">
                      <Textfield
                        inputLabel={CREATE_JOB_MODAL.JOB_TITLE}
                        inputType={"text"}
                        inputPlaceholder={CREATE_JOB_MODAL.JOB_TITLE_PLACE}
                        inputClass={
                          "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                        }
                        inputLabelClass={"text-sm font-medium text-[#212121]"}
                        inputValue={createdJobData.jobTitle}
                        inputName={"jobTitle"}
                        handleOnChange={handleOnChange}
                      />

                      <Textfield
                        inputLabel={CREATE_JOB_MODAL.COMPANY_NAME}
                        inputType={"text"}
                        inputPlaceholder={CREATE_JOB_MODAL.COMPANY_NAME_PLACE}
                        inputClass={
                          "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                        }
                        inputLabelClass={"text-sm font-medium text-[#212121]"}
                        inputValue={createdJobData.companyName}
                        inputName={"companyName"}
                        handleOnChange={handleOnChange}
                      />

                      <Textfield
                        inputLabel={CREATE_JOB_MODAL.INDUSTRY}
                        inputType={"text"}
                        inputPlaceholder={CREATE_JOB_MODAL.INDUSTRY_PLACE}
                        inputClass={
                          "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                        }
                        inputLabelClass={"text-sm font-medium text-[#212121]"}
                        inputValue={createdJobData.industry}
                        inputName={"industry"}
                        handleOnChange={handleOnChange}
                      />

                      <div className="flex gap-6">
                        <Textfield
                          inputLabel={CREATE_JOB_MODAL.LOCATION}
                          inputType={"text"}
                          inputPlaceholder={CREATE_JOB_MODAL.LOCATION_PLACE}
                          inputClass={
                            "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                          }
                          inputLabelClass={"text-sm font-medium text-[#212121]"}
                          inputValue={createdJobData.location}
                          inputName={"location"}
                          handleOnChange={handleOnChange}
                        />
                        <Textfield
                          inputLabel={CREATE_JOB_MODAL.REMOTE_TYPE}
                          inputType={"text"}
                          inputPlaceholder={CREATE_JOB_MODAL.REMOTE_TYPE_PLACE}
                          inputClass={
                            "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                          }
                          inputLabelClass={"text-sm font-medium text-[#212121]"}
                          inputValue={createdJobData.remoteType}
                          inputName={"remoteType"}
                          handleOnChange={handleOnChange}
                        />
                      </div>
                    </div>
                  )}
                  {/* Step 2 */}
                  {courantStep === 2 && (
                    <div className="flex flex-col gap-6">
                      <div className="flex gap-6">
                        <Textfield
                          inputLabel={CREATE_JOB_MODAL.EXPERIENCE}
                          inputType={"number"}
                          inputPlaceholder={CREATE_JOB_MODAL.MINIMUM}
                          inputClass={
                            "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                          }
                          inputLabelClass={"text-sm font-medium text-[#212121]"}
                          inputValue={createdJobData.minExperience}
                          inputName={"minExperience"}
                          handleOnChange={handleOnChange}
                        />
                        <Textfield
                          inputLabel={""}
                          inputType={"number"}
                          inputPlaceholder={CREATE_JOB_MODAL.MAXIMUM}
                          inputClass={
                            "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                          }
                          inputLabelClass={"text-sm font-medium text-[#212121]"}
                          inputValue={createdJobData.maxExperience}
                          inputName={"maxExperience"}
                          handleOnChange={handleOnChange}
                        />
                      </div>
                      <div className="flex gap-6">
                        <Textfield
                          inputLabel={CREATE_JOB_MODAL.SALARY}
                          inputType={"number"}
                          inputPlaceholder={CREATE_JOB_MODAL.MINIMUM}
                          inputClass={
                            "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                          }
                          inputLabelClass={"text-sm font-medium text-[#212121]"}
                          inputValue={createdJobData.minSalary}
                          inputName={"minSalary"}
                          handleOnChange={handleOnChange}
                        />
                        <Textfield
                          inputLabel={""}
                          inputType={"number"}
                          inputPlaceholder={CREATE_JOB_MODAL.MAXIMUM}
                          inputClass={
                            "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                          }
                          inputLabelClass={"text-sm font-medium text-[#212121]"}
                          inputValue={createdJobData.maxSalary}
                          inputName={"maxSalary"}
                          handleOnChange={handleOnChange}
                        />
                      </div>

                      <Textfield
                        inputLabel={CREATE_JOB_MODAL.TOTAL_EMPLOYEE}
                        inputType={"number"}
                        inputPlaceholder={CREATE_JOB_MODAL.TOTAL_EMPLOYEE_PLACE}
                        inputClass={
                          "w-full h-[36px] border border-[#E6E6E6] text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                        }
                        inputLabelClass={"text-sm font-medium text-[#212121]"}
                        inputValue={createdJobData.totalEmployee}
                        inputName={"totalEmployee"}
                        handleOnChange={handleOnChange}
                      />

                      <RadioButton
                        inputLabel={CREATE_JOB_MODAL.APPLY_TYPE}
                        inputType={"radio"}
                        inputList={APPLY_TYPE_LIST}
                        inputLabelClass={"text-sm font-medium text-[#212121]"}
                        inputClass={
                          "text-sm font-normal text-[#7A7A7A] px-2 rounded-[5px]"
                        }
                        inputValue={createdJobData.applyType}
                        inputName={"applyType"}
                        handleOnChange={handleOnChange}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-end p-8">
                  {courantStep === 1 && (
                    <Button
                      name={CREATE_JOB_MODAL.NEXT}
                      className={"py-2 px-4 bg-[#00a1ff] text-white rounded-md"}
                      handleClick={() => setCourantStep(2)}
                    />
                  )}
                  {courantStep === 2 && (
                    <Button
                      name={CREATE_JOB_MODAL.SAVE}
                      className={"py-2 px-4 bg-[#00a1ff] text-white rounded-md"}
                      handleClick={handleCreateJob}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </div>
  );
};

export default CreateJobModal;
