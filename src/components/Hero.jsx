import raphaelhero from '../assets/raphaelhero.png';

const Hero = () => {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hi, I'm Raphael</p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">Software</span>{" "}
              <br />
              Engineer
            </h1>
            <p className="hero--section--description">
            Frontend Developer with five years of industry experience, specializing in JavaScript libraries and frameworks. Adept in UI/UX design and full-stack WordPress development.
            </p>
          </div>
          <button className="btn btn-primary">
             <a href="#Contact" style={{ textDecoration: "none", color: "inherit" }}>Get In Touch</a>
          </button>

        </div>
        <div className="hero--section--img">
          <img src={raphaelhero} alt="Hero Section" />
        </div>
      </section>
    );
  }

  export default Hero;