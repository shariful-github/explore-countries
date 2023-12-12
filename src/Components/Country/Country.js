import React from "react";

const Country = (props) => {
  const { name, population, region, flags } = props.country;
  return (
    <div>
      <div className="row row-cols-2 bg-body-secondary g-1 p-3 rounded-4" style={{height: "150px"}}>
        <div style={{height: "100px"}} className="w-50">
          <img className="w-100 h-100" src={flags.png} alt="" />
        </div>
        <div className="text-start ps-2">
          <h4>{name.common}</h4>
          <h6>Population: {population}</h6>
          <h6>Subcontinent: {region}</h6>
        </div>
      </div>
    </div>
  );
};

export default Country;
