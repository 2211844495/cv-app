import React from "react";
import { useInformation } from "../information";
function EduInfo() {
  const [info, setValue] = useInformation();
  return (
    <>
      <fieldset className="edu-info">
        <legend>Educational Experience</legend>
        <input
          type="text"
          placeholder="School Name"
          onChange={setValue.bind(undefined, "schoolName")}
          value={info.schoolName}
        />
        <input
          type="text"
          placeholder="Title Of Study"
          onChange={setValue.bind(undefined, "titleOfStudy")}
          value={info.titleOfStudy}
        />
        <div className="date-of-study">
          <label id="dos">Date Of Study </label>
          <input
            type="date"
            id="dos-in"
            onChange={setValue.bind(undefined, "dateOfStudy")}
            value={info.dateOfStudy}
          />
        </div>
      </fieldset>
    </>
  );
}

export default EduInfo;
