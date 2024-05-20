import "./style.css";
// import { ModalLink } from "react-router-modal-gallery";
import Contact from "../Contact";

function Home() {
  const profileImageUrl =
    "https://github.com/jmbilizi/MKFormeller-LLC/assets/54930519/d50ff72f-c406-4bf5-93f4-a4e3d44a5a20";

  const currentYear = new Date().getFullYear();

  const testimonials = [
    {
      text: "Mrs. Formeller, our remarkable team member, has consistently showcased her exceptional talents in effectively collaborating with both me and the other team members of That Smoothie Place. What sets her apart is her proficiency in working with team members who have developmental disabilities. She displays a remarkable understanding and empathy towards their unique needs and takes great pride in ensuring they have a positive and inclusive work environment. Mrs. Formeller's dedication and ability to foster a sense of belonging within our team truly makes her an invaluable asset to our smoothie family.",
      author: "Mrs. Monique Sotomarino",
      jobTitle: "Owner",
      business: "That Smoothie Place",
    },
    {
      text: "Ms. Formeller was a critical member of our staff and a leader, building positive relationships with students and staff. She implements new and creative ways to reach all learners and ensure that every student succeeds. As our special education transition specialist, Ms. Formeller displayed understanding and empathy towards all of our students’ unique needs. She was a champion of ensuring that all students had an opportunity to work in an inclusive work environment.As the transition specialist, Ms. Formeller was an outstanding advocate for all our students, ensuring that each student and family had a plan for success as they exited our discreet programs at DHS.",
      author: "Mr. Kevin Yates",
      jobTitle: "Principal",
      business: "Damascus High School",
    },
    {
      text: "Throughout her time at Damascus High School, she consistently demonstrated qualities that helped our Damascus community. One of her greatest strengths is her ability to work well with families. She showed a remarkable talent for building strong and meaningful relationships with parents and caregivers, ensuring open lines of communication and fostering a collaborative approach to education. Her dedication to involving families in the educational process has been invaluable, instilling trust and confidence in our school community.",
      author: "Mr. Christopher Ohm",
      jobTitle: "Resource Teacher in Special Education",
      business: "Damascus HS",
    },
  ];

  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
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
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="nav-link" aria-current="page" href="#provider">
                Provider
              </a>
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
              <a className="nav-link" href="#contact">
                Contact
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

        <section id="provider" className="mb-4">
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
                  <p className="card-text fs-5 bold">
                    <strong>* MD State Teaching Certification</strong>
                  </p>
                  <p className="card-text fs-5 bold">
                    <strong> * Maryland DDA Certified Provider </strong>
                  </p>
                  <p className="card-text fs-5 lead">MKFormeller@gmail.com</p>
                  <p className="card-text fs-5 lead">301-633-6834</p>
                  <a
                    href="https://www.facebook.com/mary.formeller"
                    className="card-text fs-5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="50"
                      fill="currentColor"
                      className="bi bi-facebook"
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

        <section id="testimonials" className="mb-4">
          <div className="container jumbotron rounded border">
            <div className="row py-2">
              <h1>Testimonials</h1>
            </div>

            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="row">
                <div className="col-12">
                  <div className="row border-top m-2"></div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      fill="currentColor"
                      className="bi bi-person col-md-auto"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                    <div className="col">
                      <div className="card-body text-md-start">
                        <p className="card-text fs-6">{testimonial.text}</p>
                        <p className="card-text fs-6 fw-bold">
                          - {testimonial.author}, {testimonial.jobTitle},{" "}
                          {testimonial.business}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                  className="bi bi-chat-dots"
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
      </main>
      <footer className="p-4">
        <p>&copy; MKFormeller, LLC {currentYear}. All rights reserved.</p>
        <span>
          <a href="#home">Privacy Policy</a> -{" "}
          <a href="#home">Terms of Service</a>
        </span>
      </footer>
    </div>
  );
}

export default Home;
