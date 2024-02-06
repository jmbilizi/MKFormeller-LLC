import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Title from "../../components/Title";

import { makeStyles } from "@material-ui/core/styles";

const Contact = ({ showTitle = true }) => {
  const [email, setEmail] = React.useState(true);
  const handleEmail = () => setEmail(!email);

  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phone: "",
    message: "",
    error: "",
  });

  const { firstName, lastName, emailAddress, phone, message, error } = state;

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

  const onSubmit = () => {
    if (firstName) {
      setState({
        ...state,
        error: `${firstName}, we are unable to submit your request at the moment, please call or email instead, 301-633-6834 | MKFormeller@gmail.com`,
      });
    } else {
      setState({
        ...state,
        error: `We are unable to submit your request at the moment, please call or email instead, 301-633-6834 | MKFormeller@gmail.com`,
      });
    }
  };

  const classes = useStyles();

  return (
    <div>
      {showTitle ? <Title label="Get In Touch" /> : null}
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              multiline
              name="message"
              onChange={handleChange("message")}
              value={message}
              autoComplete="message"
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
          <p
            className="alert alert-danger text-center fs-6"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </p>
          <div className="d-grid" onClick={onSubmit}>
            <button
              type="button"
              className="btn btn-lg btn-outline-dark btn-block"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
