import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const ProjectButtons = () => (
  <Form>
      <Form.Row>
          <Form.Group as={Col} >
              <Button variant="primary" size="lg">Create Project</Button>
          </Form.Group>
          <Form.Group as={Col}>
              <Form.Control size="lg" placeholder="Search..." />
          </Form.Group>
    </Form.Row>
  </Form>
)

export default ProjectButtons;
