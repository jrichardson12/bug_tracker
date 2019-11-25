import React from 'react';
import Dashboard from '../dashboard/dashboard.js';
import ProjectList from '../projects/project_list.js';
import IncidentList from '../incidents/incident_list.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const mockProjectList = [
  {id: 1, name: "Job Hunt", img: "https://via.placeholder.com/150x25", lead: "jrichardson12", desc:"Keep Track of Jobs"},
  {id: 2, name: "Portfolio", img: "https://via.placeholder.com/150x25", lead: "jrichardson12", desc:"Show off my skills"},
  {id: 3, name: "Wedding", img: "https://via.placeholder.com/150x25", lead: "jrichardson12", desc:"My wedding website"},
];

const mockIncidentList = [
  {id: 'INC100001', project_id: 1, short_desc: 'Unable to create a Project', full_desc: 'Unable to create a Project in the project view', category:'unknown', priority:'Critical', state:'in progress', assignment_group: 'react-team', assigned_to:'jrichardson12', notes:'another table', created_by:'jrichardson12'},
  {id: 'INC100002', project_id: 1, short_desc: 'Unable to create an Incident', full_desc: 'Unable to create a Project in the project view', category:'unknown', priority:'Critical', state:'in progress', assignment_group: 'react-team', assigned_to:'jrichardson12', notes:'another table', created_by:'jrichardson12'},
  {id: 'INC200003', project_id: 2, short_desc: 'Another Bug', full_desc: 'Unable to create a Project in the project view', category:'unknown', priority:'Critical', state:'in progress', assignment_group: 'react-team', assigned_to:'jrichardson12', notes:'another table', created_by:'jrichardson12'},
];

const MyNav = () => (
  <Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Bug Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/Projects">Projects</Nav.Link>
      <Nav.Link href="/Incidents">Incidents</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/Projects" component={() => <ProjectList projects={mockProjectList}/>} />
      <Route path="/Incidents" render={(props) => <IncidentList {...props} incidents={mockIncidentList}/>} />
    </Switch>
  </Router>
)

export default MyNav;
