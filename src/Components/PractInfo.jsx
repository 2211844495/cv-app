import React from "react";
import { useInformation } from "../information";

function PractInfo() {
  const [info, setValue] = useInformation();
  return (
    <>
      <fieldset className="pract-info">
        <legend>Practical Experience</legend>
        <input
          type="text"
          placeholder="Company Name"
          onChange={setValue.bind(undefined, "companyName")}
          value={info.companyName}
        />
        <input
          type="text"
          placeholder="Position Title"
          onChange={setValue.bind(undefined, "positionTitle")}
          value={info.positionTitle}
        />
        <input
          type="text"
          placeholder="Main Responsibility"
          onChange={setValue.bind(undefined, "mainResponsibility")}
          value={info.mainResponsibility}
        />
        <div>
          <label id="dos">Started working in </label>
          <input
            type="date"
            id="start-date"
            onChange={setValue.bind(undefined, "startDate")}
            value={info.startDate}
          />
        </div>
        <div>
          <label id="dos">Until </label>
          <input
            type="date"
            id="finish-date"
            onChange={setValue.bind(undefined, "finishDate")}
            value={info.finishDate}
          />
        </div>
      </fieldset>
    </>
  );
}

export default PractInfo;
