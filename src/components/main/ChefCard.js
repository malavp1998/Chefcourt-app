import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChefCard({ chefInfo }) {
  const navigate = useNavigate();
  const showRecipe = (id) => {
    navigate(`recipe/${id}`);
  };

  return (
    <div
      className="card"
      style={{
        width: "20rem",
        marginLeft: "3%",
        marginRight: "3%",
        marginTop: "3%",
      }}
    >
      <img
        src={chefInfo.chefPicture}
        className="card-img-top"
        alt="Sunset Over the Sea"
        height={300}
      />

      <div className="card-body">
        <dl className="row">
          <dt className="col-sm-6">Name</dt>
          <dd className="col-sm-6">
            {chefInfo.chefName}
          </dd>

          <dt className="col-sm-6">Year of Exp.</dt>
          <dd className="col-sm-6">{chefInfo.yearsOfExperience} year</dd>

          <dt className="col-sm-6">Numbers of recipes</dt>
          <dd className="col-sm-6">{chefInfo.numberOfRecipes}</dd>
          <dt className="col-sm-6">Likes</dt>
          <dd className="col-sm-6">{chefInfo.likes}</dd>
        </dl>
        <button className="card-link" onClick={() => showRecipe(chefInfo.id)}>
          View Recipes
        </button>
  
      </div>
    </div>
  );
}
