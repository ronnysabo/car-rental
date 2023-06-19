import React from "react";
import { TheTeam } from "../TheTeam";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <div className="container-fluid text-center mb-5">
      <div className="row d-flex gap-3 justify-content-center mb-5">
        {TheTeam.map((user) => (
          <div
            key={user.name}
            className="col-sm-4 col-md-4 col-xl-3 p-2 d-flex justify-content-center"
          >
            <TeamCard name={user.name} img={user.img} role={user.role} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
