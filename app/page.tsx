"use client";

import Image from "next/image";
import { useState } from "react";

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
      <label htmlFor="Role"> Role:</label>
      <br />
      <input
        className="Input-value"
        type="text"
        id="Role"
        name="Role"
        value={data.Role}
        onChange={(e) => onUpdate({ ...data, Role: e.target.value })}
        placeholder={data.Role}
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

function SummaryAndSkills({ data, onUpdate, setSavedinfo }) {
  // const funtion saveFORM(){

  // }
  return (
    <form>
      <label htmlFor="Summary"> Summary:</label>
      <textarea
        className="Input-value"
        value={data.summary}
        onChange={(e) => onUpdate({ ...data, summary: e.target.value })}
      />
      <br />
      <label htmlFor="skills"> Skills:</label>
      <br />
      <input
        className="Input-value"
        type="text"
        id="skills"
        name="skills"
        value={data.skills}
        onChange={(e) => onUpdate({ ...data, skills: e.target.value })}
        placeholder={data.skills}
      />{" "}
      <button onClick={() => {}}>+</button>
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
        type="number"
        min="1900"
        max="2099"
        step="1"
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
        type="number"
        min="1900"
        max="2099"
        step="1"
        value={data.dateFrom}
        onChange={(e) => onUpdate({ ...data, dateFrom: e.target.value })}
      />
      <br />
      <label> Until:</label>
      <input
        className="Input-value"
        type="number"
        min="1900"
        max="2099"
        step="1"
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
    fname: "lee ugo",
    email: "info@gmail.com",
    phone: "01234567",
    Role: "IT SUPPORT ADMINISTRATOR",

    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",

    skills: [
      "collaboration",
      "leadership",
      "collabortion",
      "leadersip",
      "colboration",
      "leadehip",
    ],

    sname: "corona college",
    dateOfStudy: "01234567",

    titleOfStudy: "Economics",
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

  let skills = savedInfo.genInfo.skills;

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
          <SummaryAndSkills
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
              <div className="Role-output">{savedInfo.genInfo.Role}</div>
            </div>
            <div className="right-side">
              <div className="email-output">
                <icon>＠</icon> Email: {savedInfo.genInfo.email}
              </div>
              <div className="phone-output">
                <icon>📞</icon> Phone: {savedInfo.genInfo.phone}
              </div>
            </div>
          </div>

          <div className="summary-details">
            <label>SUMMARY</label>
            <div className="summary-content">
              <div>{savedInfo.genInfo.summary}</div>
            </div>
          </div>

          <div className="skills-details">
            <label>Skills</label>
            <ul className="skills-content">
              {skills.map((skill) => {
                return <li key={skill}>{skill}</li>;
              })}
            </ul>
          </div>

          <div className="Experience-details">
            <label>Work Experience</label>
            <div className="Experience-content">
              <strong> {savedInfo.genInfo.company}</strong>
              <br></br>
              <span>
                {savedInfo.genInfo.position}
                {" · "}{" "}
              </span>
              <span>
                {savedInfo.genInfo.dateFrom} {" - "}
                {savedInfo.genInfo.dateUntil}
              </span>
              <br />

              <ul>
                <li> {savedInfo.genInfo.responsibilities} </li>
              </ul>
            </div>
          </div>

          <div className="education-details">
            <label>Education</label>
            <div className="education-content">
              <strong> {savedInfo.genInfo.titleOfStudy}</strong>
              <br />
              <span>
                {" "}
                {savedInfo.genInfo.sname}
                {" · "}
              </span>
              <span> {savedInfo.genInfo.dateOfStudy}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
