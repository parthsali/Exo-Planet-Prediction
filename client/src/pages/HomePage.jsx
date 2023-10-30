import React from "react";
import "./HomePage.css"; // Import the CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Exoplanet Prediction</h1>
      </header>

      <section className="about-exoplanets">
        <h2>About Exoplanets</h2>
        <p>
          Exoplanets, or extrasolar planets, are planets outside our solar
          system that orbit stars other than the Sun. These planets can provide
          valuable insights into the diversity of planetary systems in the
          universe.
        </p>
      </section>

      <section className="keplers-telescope">
        <h2>Kepler's Telescope</h2>
        <p>
          The Kepler Space Telescope is a space observatory launched by NASA to
          discover Earth-sized planets orbiting other stars. It used the transit
          method, observing the dimming of a star's light as a planet passes in
          front of it.
        </p>
      </section>

      <section className="random-forest-algo">
        <h2>Random Forest Algorithm</h2>
        <p>
          Random Forest is a powerful machine learning algorithm used for
          classification tasks, making it suitable for predicting exoplanets. It
          excels in handling large datasets, capturing complex relationships,
          and providing feature importance for interpretability.
        </p>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We are a dedicated team working on the Exoplanet Prediction Project.
          Our goal is to leverage machine learning to contribute to the
          understanding of exoplanets and their detection.
        </p>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <div className="team-member">
          <p>Roll No: 33166</p>
          <p>Name: Parth Sali</p>
        </div>
        <div className="team-member">
          <p>Roll No: 33175</p>
          <p>Name: Aditya Tambe</p>
        </div>
        <div className="team-member">
          <p>Roll No: 33177</p>
          <p>Name: Shivanjali Thorat</p>
        </div>
      </section>
      <section className="goto-predict">
        <a href="/predict">
          <button>Go to Predict</button>
        </a>
      </section>
    </div>
  );
};

export default HomePage;
