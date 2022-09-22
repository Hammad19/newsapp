import React from "react";
import loading from "./loading.gif";

export default function Spinner() {
  return (
    loading && (
      <div className="my-3 text-center">
        <img src={loading} alt="loading" />
      </div>
    )
  );
}
