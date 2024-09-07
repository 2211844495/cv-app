import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import EduInfo from "./Components/EduInfo";
import PractInfo from "./Components/PractInfo";
import { Link } from "wouter";
function App() {
  return (
    <>
      <form className="form-box">
        <h2 style={{ textAlign: "center", fontSize: "1.8rem" }}>
          CV application
        </h2>
        <GeneralInfo />
        <EduInfo />
        <PractInfo />
        <Link href="/page">
          <button className="btn" type="button">Submit</button>
        </Link>
      </form>
    </>
  );
}

export default App;
