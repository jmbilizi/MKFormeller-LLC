import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Title = ({ label }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(0, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    mkfLogo: {
      margin: theme.spacing(1),
      background: "black",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div
        style={{
          paddingLeft: "14px",
          paddingRight: "14px",
          fontSize: "35px",
          color: "white",
          fontWeight: "900",
        }}
        className={`${classes.mkfLogo} py-0`}
        href="#"
      >
        MKF
      </div>

      <Typography component="h2" variant="h5">
        {label}
      </Typography>
    </div>
  );
};

export default Title;
