"use client";

import Image from "next/image";
import { useState } from "react";

let message = "thank you for visiting my site";
function GeneralInfo({ data, onUpdate, setSavedinfo }) {
  // const funtion saveFORM(){

  // }
  return (
    <form>
      <label htmlFor="name"> Name:</label>
      <br />
      <input
        className="Input-value"
        type="text"
        id="Name"
        name="Name"
        value={data.fname}
        onChange={(e) => onUpdate({ ...data, fname: e.target.value })}
        placeholder={data.fname}
      />
      <br />
      <label htmlFor="email">email:</label>
      <br />
      <input
        className="Input-value"
        type="text"
        id="email"
        name="email"
        value={data.email}
        onChange={(e) => onUpdate({ ...data, email: e.target.value })}
        placeholder={data.email}
      />
      <br />
      <label htmlFor="date of study">date of study:</label>
      <br />
      <input
        className="Input-value"
        type="number"
        id="date of study"
        name={data.phone}
        value={data.phone}
        onChange={(e) => onUpdate({ ...data, phone: e.target.value })}
      />
      <br />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setSavedinfo({ genInfo: data });
        }}
      >
        Save
      </button>
    </form>
  );
}
function EducationExpe({ data, onUpdate, setSavedinfo }) {
  // const funtion saveFORM(){

  // }
  return (
    <form>
      <label htmlFor="name"> School Name:</label>
      <br />
      <input
        className="Input-value"
        type="text"
        id="Name"
        name="Name"
        value={data.sname}
        onChange={(e) => onUpdate({ ...data, sname: e.target.value })}
        placeholder={data.sname}
      />
      <br />
      <label htmlFor="titleOfStudy">Title Of Study:</label>
      <br />
      <input
        className="Input-value"
        type="text"
        id="titleOfStudy"
        name="titleOfStudy"
        value={data.titleOfStudy}
        onChange={(e) => onUpdate({ ...data, titleOfStudy: e.target.value })}
        placeholder={data.titleOfStudy}
      />
      <br />
      <label htmlFor="date of study">Date of Study:</label>
      <br />
      <input
        className="Input-value"
        type="date"
        id="date of study"
        name={data.dateOfStudy}
        value={data.dateOfStudy}
        onChange={(e) => onUpdate({ ...data, dateOfStudy: e.target.value })}
      />
      <br />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setSavedinfo({ genInfo: data });
        }}
      >
        Save
      </button>
    </form>
  );
}

function PracticalExperience({ data, onUpdate, setSavedinfo }) {
  return (
    <form>
      <h3>Practical Experience</h3>
      <label>Company Name:</label>
      <br />
      <input
        type="text"
        value={data.company}
        onChange={(e) => onUpdate({ ...data, company: e.target.value })}
        className="Input-value"
      />
      <br />
      <label>Position Title:</label>
      <br />
      <input
        type="text"
        value={data.position}
        onChange={(e) => onUpdate({ ...data, position: e.target.value })}
        className="Input-value"
      />
      <br />
      <label>Main Responsibilities:</label>
      <br />
      <textarea
        className="Input-value"
        value={data.responsibilities}
        onChange={(e) =>
          onUpdate({ ...data, responsibilities: e.target.value })
        }
      />
      <br />
      <label>From:</label>
      <input
        className="Input-value"
        type="date"
        value={data.dateFrom}
        onChange={(e) => onUpdate({ ...data, dateFrom: e.target.value })}
      />
      <br />
      <label> Until:</label>
      <input
        className="Input-value"
        type="date"
        value={data.dateUntil}
        onChange={(e) => onUpdate({ ...data, dateUntil: e.target.value })}
      />
      <br />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setSavedinfo({ genInfo: data });
        }}
      >
        Save Experience
      </button>
    </form>
  );
}

export default function Home() {
  const [genInfo, setGeninfo] = useState({
    sname: "corona college",
    fname: "lee ugo",
    titleOfStudy: "Economics",
    email: "info@gmail.com",
    dateOfStudy: "01234567",
    phone: "01234567",

    company: "Google",
    position: "Developer",
    responsibilities: "Writing React code",
    dateFrom: "",
    dateUntil: "",
  });
  const [savedInfo, setSavedinfo] = useState({
    genInfo,
  });
  console.log(savedInfo.genInfo.fname);
  return (
    <>
      <div className="all-sections">
        <div className="form-section">
          <GeneralInfo
            data={genInfo}
            setSavedinfo={setSavedinfo}
            onUpdate={setGeninfo}
          />{" "}
          <br /> <br />
          <EducationExpe
            data={genInfo}
            setSavedinfo={setSavedinfo}
            onUpdate={setGeninfo}
          />{" "}
          <br /> <br />
          <PracticalExperience
            data={genInfo}
            setSavedinfo={setSavedinfo}
            onUpdate={setGeninfo}
          />
        </div>
        <br /> <br />
        <div className="display-section">
          <div className="personal-details">
            <div className="left-side">
              <div className="name-output">{savedInfo.genInfo.fname}</div>
            </div>
            <div className="right-side">
              <div className="email-output">
                Email: {savedInfo.genInfo.email}
              </div>
              <div className="phone-output">
                Phone: {savedInfo.genInfo.phone}
              </div>
            </div>
          </div>

          <div className="Experience-details">
            <label>Work Experience</label>
            <div className="Experience-content">
              <div>
                <strong>Company:</strong> {savedInfo.genInfo.company}
              </div>
              <div>
                <strong>Position:</strong> {savedInfo.genInfo.position}
              </div>
              <div>
                <strong>Task:</strong> {savedInfo.genInfo.responsibilities}
              </div>
              <div>
                <strong>Worked:</strong> {savedInfo.genInfo.dateFrom} to{" "}
                {savedInfo.genInfo.dateUntil}
              </div>
            </div>
          </div>

          <div className="education-details">
            <label>Education</label>
            <div className="education-content">
              <div>School Name: {savedInfo.genInfo.sname}</div>
              <div>Title Of Study: {savedInfo.genInfo.titleOfStudy}</div>
              <div>Date of Study: {savedInfo.genInfo.dateOfStudy}</div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
