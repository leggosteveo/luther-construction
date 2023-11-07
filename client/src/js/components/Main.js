import React from "react";
import Footer from "./Footer";
export const Main = () => (
  <div className="" style={{ height: "calc(100% - 99px)" }}>
    <section id="background" className="ng-scope">
      <div id="backgroundText">
        <p>
          <h1 className="home-page-title">LUTHER CONSTRUCTION</h1>
          We are a global construction company, based in Florida, implementing
          the most modern and proven construction techniques to bring our
          clients visions to reality. Thank you for visiting our site, take a
          look at our previous work and contact us if you would like more
          information on a specific project.
        </p>
      </div>
    </section>
    <section id="projects">
      <h2 className="home-page-title">PROJECTS</h2>
      <div className="project-row row card-deck">
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <div className="card">
            <h5 className="card-title text-left">Retile</h5>
            <img
              src="https://i.ibb.co/bBY37mY/IMG-2196.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-body">
              <p className="card-footer">
                Retiled the floor in living room area of the client.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <div className="card">
            <h5 className="card-title text-left">New Driveway</h5>
            <img src={"./img/IMG_2179.JPG"} className="card-img" alt="..." />
            <div className="card-body">
              <p className="card-footer">
                Paved new cement driveway leading to client's house.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <div className="card">
            <h5 className="card-title text-left">New Shower</h5>
            <img src="./img/IMG_2195.JPG" className="card-img" alt="..." />
            <div className="card-body">
              <p className="card-footer">
                Built and tiled new support wall for new shower area.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
          <div className="card">
            <h5 className="card-title text-left">Carpet Installation</h5>
            <img src="./img/IMG_2187.JPG" className="card-img" alt="..." />
            <div className="card-body">
              <p className="card-footer">
                Installed new carpet in bedroom of client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <h2 className="home-page-title">ABOUT</h2>
      <p className="container">
        Luther Construction is a family owned construction company founded on
        trust and principal. We are your one stop solution for home construction
        and remodeling. Services include, but are not limited to:
      </p>
      <ul id="services-list" className="container">
        <li className="col-12 col-sm-6 col-md-4">New Roof</li>
        <li className="col-12 col-sm-6 col-md-4">Pool Installation</li>
        <li className="col-12 col-sm-6 col-md-4">New Room</li>
        <li className="col-12 col-sm-6 col-md-4">New Driveway</li>
        <li className="col-12 col-sm-6 col-md-4">Appliance Installation</li>
        <li className="col-12 col-sm-6 col-md-4">Deck Building</li>
        <li className="col-12 col-sm-6 col-md-4">Carpet Installation</li>
        <li className="col-12 col-sm-6 col-md-4">Retiling</li>
        <li className="col-12 col-sm-6 col-md-4">Demolition</li>
      </ul>
    </section>
    <Footer />
  </div>
);

export default Main;
