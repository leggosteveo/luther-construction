import React from "react";

export const Main = () => (
  <div className="" style={{ height: "calc(100% - 99px)" }}>
    <div ng-view="" style={{ height: "100%" }}>
      <div id="background" className="ng-scope">
        <div id="backgroundText">
          <p>
            We are a global construction company, based in Florida, implementing
            the most modern and proven construction techniques to bring our
            clients visions to reality. Thank you for visiting our site, take a
            look at our previous work and contact us if you would like more
            information on a specific project.
          </p>
        </div>
      </div>
      <div id="projects">
        <h2>PROJECTS</h2>
        <div className="project-row">
          <div className="card" style={{ width: "18rem" }}>
            <h5 className="card-title text-left">Retile</h5>
            <img
              src="https://i.ibb.co/bBY37mY/IMG-2196.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Retiled the floor in living room area of the client.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <h5 className="card-title text-left">New Driveway</h5>
            <img
              src={("./img/IMG_2179.JPG")}
              className="card-img"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">
                Paved new cement driveway leading to client's house.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <h5 className="card-title text-left">New Shower</h5>
            <img src="./img/IMG_2195.JPG" className="card-img" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Built and tiled new support wall for new shower area.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <h5 className="card-title text-left">Carpet Installation</h5>
            <img src="./img/IMG_2187.JPG" className="card-img" alt="..." />
            <div className="card-body">
              <p className="card-text">Installed new carpet in.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <h2>ABOUT</h2>
        <p>
          Luther Construction is a family owned construction company founded on
          trust and principal. We are your one stop solution for home
          construction and remodeling. Services include, but are not limited to:
        </p>
        <ul id="services-list">
          <li>New Roof</li>
          <li>Pool Installation</li>
          <li>New Room</li>
          <li>New Driveway</li>
          <li>Appliance Installation</li>
          <li>Deck Building</li>
          <li>Carpet Installation</li>
          <li>Retiling</li>
          <li>Demolition</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Main;
