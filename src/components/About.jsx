import aboutimage from "../assets/aboutimage.png";

const About = () => {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src={aboutimage} alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            I’m a seasoned Front-End Software Engineer with 5+ years of experience in building responsive, user-friendly web applications. My skills include HTML, CSS, JavaScript (ES6+), React.js, Next.js, and Node.js, with a focus on accessibility, performance optimization, and testing. I excel in UI/UX design with expertise in user research, wireframing, and visual design using Figma. My WordPress development background includes theme/plugin development, SEO, and e-commerce solutions.
            </p>
            <p className="hero--section-description">
            I’m passionate about delivering scalable, secure, and optimized web solutions. Let's create engaging digital experiences together!
            </p>
          </div>
        </div>
      </section>
    );
  }

  export default About;