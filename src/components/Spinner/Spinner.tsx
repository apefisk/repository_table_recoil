import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Spinner.scss";

export default function Spinner() {
  return (
    <div className="spinner">
      <ClipLoader />
    </div>
  );
}
