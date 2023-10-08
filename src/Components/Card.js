import React from "react";

export const Card = (props) => {
  let { url, heading } = props;
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={url} alt="loading" />
        </div>
        <div className="card-body">
          <h3>{heading}</h3>
        </div>
      </div>
    </>
  );
};
