import React from "react";

export default function Newsitem(props) {
  return (
    <div className="my-3">
      <div className="card " style={{ width: "18rem" }}>
        <img src={props.imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
          </h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {props.author ? props.author : "Unknown"} On{" "}
              {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a
            href={props.newsurl}
            target="_blank"
            className="btn btn-dark btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
