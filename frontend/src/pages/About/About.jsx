import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-introduction">
        <h1>About Us</h1>
        <p>
          Welcome to the Alumni Association! We are a dedicated group of
          former students who are committed to fostering a strong network and
          supporting our alma mater. Our mission is to connect alumni,
          celebrate achievements, and contribute to the growth of our
          community.
        </p>
      </section>
      
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to enhance the relationship between alumni and
          the institution by providing opportunities for engagement,
          collaboration, and support. We strive to create a vibrant community
          that enriches the lives of our members and contributes to the
          success of future generations.
        </p>
      </section>
      
      <section className="about-history">
        <h2>Our History</h2>
        <p>
          Founded in [Year], the Alumni Association has a rich history of
          bringing together graduates from all over the world. Over the
          years, we have organized numerous events, created scholarship
          programs, and built a network that spans generations. Our history
          is a testament to the strength and unity of our alumni community.
        </p>
      </section>
      
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>President</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Vice President</p>
          </div>
          <div className="team-member">
            <img src="team-member3.jpg" alt="Team Member 3" />
            <h3>Emily Johnson</h3>
            <p>Secretary</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
