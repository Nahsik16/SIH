import 'bootstrap/dist/css/bootstrap.min.css';
import { eventsList } from '../../assets/assets';

const Events = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Upcoming Events</h2>
          <div className="row g-4">
            {eventsList.upcoming.map((event, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100">
                  <img
                    src={event.image}
                    style={{ height: '200px', objectFit: 'cover' }}  // Inline styles
                    className="card-img-top"
                    alt="Event Poster"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <p><strong>Start Date:</strong> {event.startDate}</p>
                    <p><strong>End Date:</strong> {event.endDate}</p>
                    <a href={event.viewLink} className="btn btn-primary me-2">View Event</a>
                    <a href={event.registerLink} className="btn btn-outline-success">Register</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-center mt-5 mb-5">Our Recent Bangers</h2>
          <div className="row g-4">
            {eventsList.recent.map((event, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100">
                  <img
                    src={event.image}
                    style={{ height: '200px', objectFit: 'cover' }}  // Inline styles
                    className="card-img-top"
                    alt="Event Poster"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text">{event.description}</p>
                    <p><strong>Start Date:</strong> {event.startDate}</p>
                    <p><strong>End Date:</strong> {event.endDate}</p>
                    <a href={event.detailsLink} className="btn btn-primary">View Event Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
