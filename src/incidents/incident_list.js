import React from 'react';
import IncidentView from './incident_view.js';
import Table from 'react-bootstrap/Table';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const IncidentList = ({props, incidents}) => (
  <Router>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Incident Number</th>
        <th>Project</th>
        <th>Short Description</th>
        <th>Category</th>
        <th>Priority</th>
        <th>State</th>
        <th>Assignment Group</th>
        <th>Assigned To</th>
        <th>Created By</th>
      </tr>
    </thead>
    <tbody>
    {incidents.map((incident) =>
      <tr key={incident.id}>
        <td><Link to={`/incident/${incident.id}`}>{incident.id}</Link></td>
        <td>{incident.project_id}</td>
        <td>{incident.short_desc}</td>
        <td>{incident.category}</td>
        <td>{incident.priority}</td>
        <td>{incident.state}</td>
        <td>{incident.assignment_group}</td>
        <td>{incident.assigned_to}</td>
        <td>{incident.created_by}</td>
      </tr>
    )}
    </tbody>
  </Table>
  <Switch>
              <Route path={`/incident/:id`} render={() => <IncidentView />} />
              </Switch>
  </Router>
)

export default IncidentList;
