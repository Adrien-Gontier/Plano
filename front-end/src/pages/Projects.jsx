import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Projects() {

  const { dataProjects, setDataProjets } = useState([]);

  const API_URL_Plano = "http://localhost:8080/plano/projects";

  useEffect(() => {
    axios.get(API_URL_Plano)
      .then(
        res => {
          const occurence = res.data;
          setDataProjets(occurence);
        }
      )
  }, []);

  // code in to the id for useParams for component OneProject

  return (
    <div>Hello world Projects!</div>
  )
}