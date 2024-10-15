import aboutimage from "../assets/aboutimage.png";

const About = () => {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src={aboutimage} alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h2 className="about-section--heading">About</h2>
            <p className="section--title">Front-End Engineer | React Developer | UI/UX Designer </p>
            <p className="hero--section-description">
            I’m a seasoned Front-End Software Engineer with 5+ years of experience in building responsive, user-friendly web and mobile applications. My skills include HTML, CSS, JavaScript, React.js, Next.js and React Native, with a focus on accessibility, performance optimization, and testing. I excel in UI/UX design with expertise in user research, wireframing, and visual design using Figma. My WordPress development background includes theme/plugin development, SEO, and e-commerce solutions.
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