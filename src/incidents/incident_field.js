import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const IncidentField = ({ label, text, size, small }) => (
  <Grid item xs={small} sm={size}>

      <div className="primary-text" style={{padding:'10px'}}>
      <strong>{label}</strong>: {text}
      </div>

  </Grid>
);

export default IncidentField;
