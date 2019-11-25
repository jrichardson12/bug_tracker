import React from 'react';
import ProjectView from './project_view.js';
import ProjectButtons from './project_buttons';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const ProjectList = ({projects}) => (
  <Container style={{padding:"5px"}}>
    <Row>
      <Col>
      <ProjectButtons />
      </Col>
    </Row>
    <Row>
      <Col>
    <CardColumns>
    {projects.map((project) =>
      <ProjectView key={project.id} name={project.name} img={project.img} lead={project.lead} desc={project.desc} />
    )}
    </CardColumns>
    </Col>
    </Row>
  </Container>
)

export default ProjectList;
