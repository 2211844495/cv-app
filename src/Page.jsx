import React from "react";
import "./App.css";
import { useAtomValue } from "jotai";
import { information } from "./information";
import { Link } from "wouter";
function Page() {
    const info = useAtomValue(information);
    return (
        <>
            <div className="form-box">
                <h1 style={{textAlign: "center"}}>{info.firstName} {info.lastName}'s CV</h1>
                
                <div className="general-info-cv prev">
                <h3>General Information</h3>
                <label>First Name: </label> 
                <p>{info.firstName}</p>
                <label>Last Name: </label> 
                <p>{info.lastName}</p>
                <label>Email: </label> 
                <p>{info.email}</p>
                </div>

                <div className="edu-info-cv prev">
                <h3>Educational Experience</h3>
                <label>School Name: </label> 
                <p>{info.schoolName}</p>
                <label>Title Of Study: </label> 
                <p>{info.titleOfStudy}</p>
                <label>Date Of Study: </label> 
                <p>{info.dateOfStudy}</p>
                </div>

                <div className="pract-info-cv prev">
                <h3>Practical Experience</h3>
                <label>Company Name: </label> 
                <p>{info.companyName}</p>
                <label>Position Title:  </label> 
                <p>{info.positionTitle}</p>
                <label>Main Responsibilities: </label> 
                <p>{info.mainResponsibility}</p>
                <label>Started Working in: </label> 
                <p>{info.startDate}</p>
                <label>Until: </label> 
                <p>{info.finishDate}</p>
                </div>
                
                <Link href="/">
                    <button className="btn">Edit</button>
                </Link>
            </div>
        </>
    );
}

export default Page;