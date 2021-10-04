import React from "react";
import { useParams } from "react-router";

const Vacancies = () => {
  const params = useParams();

  return <h1>{params.catType}</h1>;
};

export default Vacancies;
