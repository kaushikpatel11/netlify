// Build-In
import React, { createContext, useState } from "react";

// Internal
import { JobData } from "../../consts/JobData";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const JobDataContext = ({ children }) => {
  const [jobDataList, setJobDataList] = useState(JobData);

  return (
    <UserContext.Provider value={jobDataList}>
      <UserDispatchContext.Provider value={setJobDataList}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export { UserContext, UserDispatchContext };
export default JobDataContext;
