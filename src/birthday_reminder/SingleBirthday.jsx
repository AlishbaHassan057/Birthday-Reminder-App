import React from "react";

const SingleBirthday = ({ id, image, name, age, date, rem }) => {
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <>
      <div className="cont container my-1">
        <div className="d-flex justify-content-between align-items-center">
          <div className="left d-flex gap-3 align-items-center">
            <img
              style={{
                width: "90px",
                borderRadius: "50%",
                height: "90px",
                objectFit: "cover",
              }}
              src={image}
              alt={`${name}'s profile`}
            />
            <div className="info">
              <h5>{name} 🎂</h5>
              <h6>{age} years</h6>
              <p>Birthday: {formattedDate}</p>
            </div>
          </div>
          <div className="right">
            <button onClick={() => rem(id)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBirthday;
