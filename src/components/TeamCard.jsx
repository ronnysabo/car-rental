import React from "react";
import { Card } from "react-bootstrap";

function TeamCard({ name, role, img }) {
  return (
    <Card style={{ width: "20rem", marginTop: "2rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title className="text-secondary">{role}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default TeamCard;
