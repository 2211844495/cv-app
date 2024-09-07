import React from "react";
import { useInformation } from "../information";
function GeneralInfo() {
  const [info, setValue] = useInformation();
  
  return (
    <>
      <fieldset className="general-info">
        <legend>General Information</legend>
        <input type="text" placeholder="First Name" onChange={setValue.bind(undefined, "firstName")} value={info.firstName}/>
        <input type="text" placeholder="Last Name" onChange={setValue.bind(undefined, "lastName")} value={info.lastName}/>
        <input type="email" placeholder="Email" onChange={setValue.bind(undefined, "email")} value={info.email}/>
      </fieldset>
    </>
  );
};

export default GeneralInfo;
