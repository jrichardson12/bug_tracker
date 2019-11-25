import React from 'react';
import Card from 'react-bootstrap/Card';

const ProjectView = ({name, img, lead, desc}) => (
      <Card border="dark">
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{lead}</Card.Subtitle>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
)

export default ProjectView;
