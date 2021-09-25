import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Title from "../../components/Title";

import { makeStyles } from "@material-ui/core/styles";

const Contact = () => {
  const [email, setEmail] = React.useState(true);
  const handleEmail = () => setEmail(!email);

  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phone: "",
    error: "",
  });

  const { firstName, lastName, emailAddress, phone, error } = state;

  const handleChange = (name) => (event) => {
    setState({ ...state, error: "", [name]: event.target.value });
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(0, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      margin: theme.spacing(0, 0, 3, 0),
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Title label="Get In Touch" />
      <div
        className="alert alert-danger text-center"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid item xs={12} className="py-0">
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              onChange={handleChange("firstName")}
              value={firstName}
              autoComplete="first name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} className="py-0">
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastName"
              onChange={handleChange("lastName")}
              value={lastName}
              autoComplete="last name"
            />
          </Grid>
          <Grid item xs={12} className="py-0">
            {email ? (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="emailAddress"
                onChange={handleChange("emailAddress")}
                value={emailAddress}
                autoComplete="email"
              />
            ) : (
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                onChange={handleChange("phone")}
                value={phone}
                autoComplete="phone"
              />
            )}
            <Link className="btn p-0 mb-4 mt-1" onClick={handleEmail}>
              Use {email ? "phone" : "email"} instead
            </Link>
          </Grid>
          <button
            type="button"
            className="btn btn-lg btn-outline-dark btn-block"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
