import React, { useState } from "react";
import SingleBirthday from "./SingleBirthday";
import { data } from "./data";
import "./style.css";

const Birthday = () => {
  const [info, setInfo] = useState(data);

  const getBirthdaysForToday = () => {
    const today = new Date();

    return info.filter((item) => {
      const birthdayDate = new Date(item.date);
      return (
        birthdayDate.getDate() === today.getDate() &&
        birthdayDate.getMonth() === today.getMonth() &&
        birthdayDate.getFullYear() === today.getFullYear()
      );
    });
  };

  const birthdaysForToday = getBirthdaysForToday();

  const removePerson = (id) => {
    const newList = info.filter((item) => {
      return item.id !== id;
    });
    setInfo(newList);
  };

  return (
    <>
      <div className="con container shadow p-3 col-lg-7 mt-4 m-auto">
        <h1 className="display-4 fw-bold text-center text-danger">
          {birthdaysForToday.length > 0
            ? `${birthdaysForToday.length} Birthdays Today`
            : "No Birthdays Today"}
        </h1>
        <h4 className=" text-center">
          🎉 Celebrating on: {new Date().toLocaleDateString()}
        </h4>

        {birthdaysForToday.map((item) => (
          <SingleBirthday key={item.id} {...item} rem={removePerson} />
        ))}
        {info.length === 0 ? (
          <button
            onClick={() => setInfo(data)}
            className="btn btn-success my-1 mt-3 w-100"
          >
            Refresh All
          </button>
        ) : (
          <button
            onClick={() => setInfo([])}
            className="btn btn-danger my-1 mt-3 w-100"
          >
            Clear All
          </button>
        )}
      </div>
    </>
  );
};

export default Birthday;
