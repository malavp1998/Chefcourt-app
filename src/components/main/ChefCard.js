import React from "react";

export default function ChefCard() {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
        className="card-img-top"
        alt="Sunset Over the Sea"
      />

      <div className="card-body">
        {/* <h5 className="card-title">ChefName</h5> */}
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <dl className="row">
          <dt className="col-sm-6">Name</dt>
          <dd className="col-sm-6">John Doe</dd>

          <dt className="col-sm-6">Year of Exp.</dt>
          <dd className="col-sm-6">2</dd>

          <dt className="col-sm-6">Numbers of recipes</dt>
          <dd className="col-sm-6">123</dd>
          <dt className="col-sm-6">Likes</dt>
          <dd className="col-sm-6">13</dd>
        </dl>
        <a href="#" className="card-link">
          View Recipes
        </a>
        {/* <a href="#" className="card-link">
          Another link
        </a> */}
      </div>
    </div>
  );
}
