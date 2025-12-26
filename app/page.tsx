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
      <label htmlFor="phone number">phone number:</label>
      <br />
      <input
        className="Input-value"
        type="number"
        id="phone number"
        name={data.phone}
        value={data.phone}
        onChange={(e) => onUpdate({ ...data, phone: e.target.value })}
      />
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

export default function Home() {
  const [genInfo, setGeninfo] = useState({
    fname: "lee ugo",
    email: "info@gmail.com",
    phone: "01234567",
  });
  const [savedInfo, setSavedinfo] = useState({
    genInfo,
  });
  console.log(savedInfo.genInfo.fname);
  return (
    <>
      <GeneralInfo
        data={genInfo}
        setSavedinfo={setSavedinfo}
        onUpdate={setGeninfo}
      />{" "}
      <br /> <br />
      <div> {message}</div>
      <label>result</label>
      <div>Phone: {savedInfo.genInfo.phone}</div>
      <div>Name: {savedInfo.genInfo.fname}</div>
      <div>Email: {savedInfo.genInfo.email}</div>
    </>
  );
}
