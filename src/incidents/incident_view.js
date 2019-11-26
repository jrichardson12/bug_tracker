import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Notes from "../notes/Notes.js";
import IncidentField from "./incident_field.js";

const IncidentView = ({ props, incidents }) => {
  let url_id = props.match.params.id;
  let i;
  let incident;
  for (i = 0; i < incidents.length; i++) {
    if (incidents[i].id === url_id) {
      incident = incidents[i];
    }
  }
  return (
    <div className="light-primary-color-bg">
      <Grid container spacing={1}>
        <IncidentField
          label="Incident ID"
          text={incident.id}
          size={6}
          small={12}
        />
        <IncidentField
          label="Project ID"
          text={incident.project_id}
          size={6}
          small={12}
        />
        <IncidentField
          label="Category"
          text={incident.category}
          size={6}
          small={12}
        />
        <IncidentField
          label="Priority"
          text={incident.priority}
          size={6}
          small={12}
        />
        <IncidentField
          label="State"
          text={incident.state}
          size={6}
          small={12}
        />
        <IncidentField
          label="Assignment Group"
          text={incident.assignment_group}
          size={6}
          small={12}
        />
        <IncidentField
          label="Assigned To"
          text={incident.assigned_to}
          size={6}
          small={12}
        />
        <IncidentField
          label="Created By"
          text={incident.created_by}
          size={6}
          small={12}
        />
        <IncidentField
          label="Short Desciption"
          text={incident.short_desc}
          size={12}
          small={12}
        />
        <IncidentField
          label="Full Desciption"
          text={incident.full_desc}
          size={12}
          small={12}
        />
        <div style={{ padding: "10px" }}>
          <Notes />
        </div>
      </Grid>
    </div>
  );
};

export default IncidentView;
