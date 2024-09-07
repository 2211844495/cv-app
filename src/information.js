import { atom, useAtom } from "jotai";

export const information = atom({
  firstName: "",
  lastName: "",
  email: "",
  schoolName: "",
  titleOfStudy: "",
  dateOfStudy: "",
  companyName: "",
  positionTitle: "",
  mainResponsibility: "",
  startDate: "",
  finishDate: "",
});

export function useInformation() {
  const [info, setInfo] = useAtom(information);

  function setValue(key, ev) {
    const copy = { ...info };
    copy[key] = ev.target.value;
    setInfo(copy);
  }

  return [info, setValue];
}
