import "./style.css";
// import { ModalLink } from "react-router-modal-gallery";
import Contact from "../Contact";

function Home() {
  const profileImageUrl =
    "https://github.com/jmbilizi/MKFormeller-LLC/assets/54930519/d50ff72f-c406-4bf5-93f4-a4e3d44a5a20";

  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <h1
            className="text-white"
            style={{ fontWeight: "900", cursor: "pointer" }}
          >
            MKF
          </h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" aria-current="page" href="#about">
                Abouts
              </a>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </nav>

      <br></br>
      <main className="container">
        <section id="services" className="mb-4">
          <div className="card">
            <div className="row align-items-center g-0 p-2 m-0">
              <div
                className="col-md-4 p-0 m-0"
                style={{ backgroundColor: "black" }}
              >
                <h1 className="font-weight-bold text-white p-4">
                  MKFormeller, LLC
                </h1>
              </div>
              <div className="col-md-8 p-0 m-0 text-start">
                <div className="card-body">
                  <h1 className="card-title">
                    Serving adults 18+ with varying abilities
                  </h1>
                  <p className="card-text fs-5">
                    Promoting independence, self-advocacy, and communication by
                    providing quality job coaching, social skills training,
                    exploring public transportation options and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-4">
          <div className="card mb-3">
            <div className="row g-0 px-2">
              <div className="col-md-4 p-4">
                <img
                  src={profileImageUrl}
                  alt="Mary's passport"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-md-8 text-md-start">
                <div className="card-body">
                  <h1 className="card-title">Mary Formeller, Director</h1>
                  <br></br>
                  <p className="card-text fs-5">
                    Retired Montgomery County Public Schools (MCPS) Special
                    Education Teacher with 40+ years serving young adults with
                    varying needs.
                  </p>
                  <p className="card-text fs-5">
                    MD State Teaching Certification
                  </p>
                  <br></br>
                  <p className="card-text fs-5">MKFormeller@gmail.com</p>
                  <p className="card-text fs-5">301-633-6834</p>
                  <a
                    href="https://www.facebook.com/mary.formeller"
                    className="card-text fs-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="50"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <img src={profileImageUrl} alt="Mary's passport" />
          <br></br>
          <h1 className="display-4">
            Serving adults 18+ with varying abilities..
          </h1>
          <br></br>
          <p className="lead">
            Promoting independence, self-advocacy, and communication by
            providing quality travel training, job coaching, social skills
            training, and{" "}
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
          </ModalLink> */}
        </section>

        <section id="contact" className="mb-4">
          <div className="card">
            <div className="row align-items-center g-0 px-2">
              <div className="col-md-4 border-at-end p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  fill="currentColor"
                  class="bi bi-chat-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2" />
                </svg>
              </div>
              <div className="col-md-8 text-md-start">
                <div className="card-body">
                  <Contact showTitle={false} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials">
          <div className="card">
            <div className="row align-items-center g-0 px-2">
              <div className="col-md-4 p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  fill="currentColor"
                  class="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                </svg>
              </div>
              <div className="col-md-8 text-md-start ps-4">
                <p className="fs-3">Testimonials are coming soon...</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="p-4">
        <p>&copy; MKFormeller, LLC {currentYear}. All rights reserved.</p>
        <span>
          <a href="#home">Privacy Policy </a>-
          <a href="#home">Terms of Service</a>
        </span>
      </footer>
    </div>
  );
}

export default Home;
