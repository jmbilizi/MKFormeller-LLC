import "./style.css";
import { ModalLink } from "react-router-modal-gallery";

function Home() {
  return (
    <div className="App">
      <header className="App-header container-fluid">
        <h1 className="display-4">Welcome to</h1>
        <br></br>
        <h1
          style={{ backgroundColor: "black", color: "white" }}
          className="font-weight-bold p-4"
        >
          MKFormeller LLC
        </h1>
        <br></br>
        <h1 className="display-4">
          Serving adults 18+ with varying abilities..
        </h1>
        <br></br>
        <p className="lead">
          Promoting independence, self-advocacy, and communication by providing
          quality travel training, job coaching, social skills training, and{" "}
          <span>
            <a href="/" className="link-primary">
              more...
            </a>
          </span>
        </p>
        <br></br>
        <ModalLink
          className="bg-primary text-light px-5 py-3"
          style={{
            textDecoration: "none",
          }}
          to="/contact"
        >
          Get In Touch
        </ModalLink>
      </header>
    </div>
  );
}

export default Home;
