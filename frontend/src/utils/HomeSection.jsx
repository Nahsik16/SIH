import { assets, eventsList } from "../assets/assets";

function HomeSection() {
  return  (
    <>
      <section className="container py-5">
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card carousel-card">
              <div className="card-body">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={assets.alumini1} className="d-block w-100" alt="University Image 1" style={{ width: '100%', height: '300px', objectFit: 'contain' }} />
                    </div>
                    <div className="carousel-item">
                      <img src={assets.alumini2} className="d-block w-100" alt="University Image 2" style={{ width: '100%', height: '300px', objectFit: 'contain' }} />
                    </div>
                    <div className="carousel-item">
                      <img src={assets.alumini3} className="d-block w-100" alt="University Image 3" style={{ width: '100%', height: '300px', objectFit: 'contain' }} />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Events section moved inside the same row as the carousel */}
          <div className="col-md-4 mb-4">
            <div className="card card-spacing">
              <a href="events.html" className="text-decoration-none text-dark">
                <div className="card-body">
                  <h5 className="card-title">Upcoming Events</h5>
                  <ul className="list-unstyled">
                    {eventsList.upcoming.slice(0, 3).map((event, index) => (
                      <li key={index}>
                        <strong>{event.title}:</strong> {event.startDate} - {event.endDate}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card card-spacing">
              <a href="life-journey.html" className="text-decoration-none text-dark">
                <div className="card-body">
                  <h2 className="card-title">Notable Alumni</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <img src={assets.alumini1} className="img-fluid" alt="Alumni 1" />
                    </div>
                    <div className="col-md-4">
                      <img src={assets.alumini2} className="img-fluid" alt="Alumni 2" />
                    </div>
                    <div className="col-md-4">
                      <img src={assets.alumini3} className="img-fluid" alt="Alumni 3" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card card-spacing">
              <a href="members.html" className="text-decoration-none text-dark">
                <div className="card-body">
                  <h2 className="card-title">New Members</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <img style={{height : "50vh", width :"50vh", objectFit :"contain", borderRadius : "50%"}} src={assets.alumini4} className="img-fluid" alt="New Member 1" />
                    </div>
                    <div className="col-md-4">
                      <img src={assets.alumini5}style={{height : "50vh", width :"50vh", objectFit :"contain", borderRadius : "50%"}}className="img-fluid" alt="New Member 2" />
                    </div>
                    <div className="col-md-4">
                      <img src={assets.alumini6} style={{height : "50vh", width :"50vh", objectFit :"contain", borderRadius : "50%"}} className="img-fluid" alt="New Member 3" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card card-spacing">
              <a href="alumni-profile.html" className="text-decoration-none text-dark">
                <div className="card-body">
                  <h2 className="card-title">Alumni Profile</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <img src={assets.alumini5} className="img-fluid" alt="Profile 1" />
                    </div>
                    <div className="col-md-4">
                      <img src={assets.alumini6} className="img-fluid" alt="Profile 2" />
                    </div>
                    <div className="col-md-4">
                      <img src={assets.alumini3} className="img-fluid" alt="Profile 3" />
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <a href="https://alumni-profile-webapp.com" className="btn btn-primary">View Full Profile</a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container text-center">
          <a href="https://website.com" className="btn me-3">
            <img src="icons/internet-icon.png" alt="Website" style={{ height: '20px', verticalAlign: 'middle' }} />
            University Website
          </a>
          <a href="https://instagram.com" className="btn me-3">
            <img src="icons/instagram-icon.jpg" alt="Instagram" style={{ height: '20px', verticalAlign: 'middle' }} />
            Instagram
          </a>
          <a href="https://facebook.com" className="btn me-3">
            <img src="icons/fb-icon.webp" alt="Facebook" style={{ height: '20px', verticalAlign: 'middle' }} />
            Facebook
          </a>
          <a href="https://twitter.com" className="btn">
            <img src="icons/twitter-icon.png" alt="Twitter" style={{ height: '20px', verticalAlign: 'middle' }} />
            Twitter
          </a>
        </div>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default HomeSection;