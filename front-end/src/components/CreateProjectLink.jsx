import React from "react";
import { Link } from "react-router-dom";

export default function CreateProjectLink() {
  return (
    <Link to="/createproject" className="createProject-link">
      Créer un projet
    </Link>
  );
}
