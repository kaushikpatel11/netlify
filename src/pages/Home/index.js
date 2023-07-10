// Build-In
import React, { useState } from "react";

// Internal
import JobDataContext from "../../Context/JobDataContext";
import CreateJobModal from "../../common/CreateJobModal";
import { CREATE_JOB_MODAL } from "../../consts/common";
import JobCards from "../../components/JobCards";
import Button from "../../common/Button";

const Home = () => {
  const [createJobShowModal, setCreateJobShowModal] = useState(false);
  const handleCloseModal = () => {
    setCreateJobShowModal(false);
  };

  return (
    <>
      <JobDataContext>
        <div className="flex justify-end items-end px-6 py-4">
          <Button
            name={CREATE_JOB_MODAL.CREATE_JOB}
            className={"py-2 px-4 bg-[#00a1ff] text-white rounded-md"}
            handleClick={() => setCreateJobShowModal(true)}
          />
        </div>
        {createJobShowModal && (
          <CreateJobModal
            openModal={createJobShowModal}
            handleCloseModal={handleCloseModal}
          />
        )}
        <JobCards />
      </JobDataContext>
    </>
  );
};

export default Home;
