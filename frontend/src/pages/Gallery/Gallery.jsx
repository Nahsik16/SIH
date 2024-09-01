
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery= () => {
  return (
    <div>
      <section className="py-3 container">
        <h2>Albums <span className="text-muted">Pictures from TSEC</span></h2>
        <ul className="nav nav-tabs mt-4">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#photos">Photos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#videos">Videos</a>
          </li>
        </ul>

        <div className="tab-content mt-3">
          {/* Photos Section */}
          <div className="tab-pane fade show active" id="photos">
            <div className="row">
              {/* Repeat this for each album */}
              <div className="col-md-4">
                <div className="card mb-4">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#album1Modal">
                    <img src="icons/logo.png" className="card-img-top" alt="Album 1" />
                  </a>
                  <div className="card-body text-center">
                    <h5 className="card-title">Shazam</h5>
                    <p className="card-text">62 Photos</p>
                  </div>
                </div>
              </div>
              {/* Add more albums here */}
            </div>
          </div>

          {/* Videos Section */}
          <div className="tab-pane fade" id="videos">
            <div className="row">
              {/* Repeat this for each album */}
              <div className="col-md-4">
                <div className="card mb-4">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#album2Modal">
                    <img src="icons/logo1.png" className="card-img-top" alt="Album 1" />
                  </a>
                  <div className="card-body text-center">
                    <h5 className="card-title">Shazam</h5>
                    <p className="card-text">21 Videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      <div className="modal fade" id="album1Modal" tabIndex="-1" aria-labelledby="album1ModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="album1ModalLabel">Shazam - Photo Album</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="photo-grid">
                <img src="icons/fb-icon.webp" alt="Photo 1" />
                <img src="icons/instagram-icon.jpg" alt="Photo 2" />
                <img src="icons/internet-icon.png" alt="Photo 3" />
                <img src="icons/logo1.png" alt="Photo 4" />
                <img src="icons/internet-icon.png" alt="Photo 5" />
                <img src="icons/instagram-icon.jpg" alt="Photo 6" />
                <img src="icons/twitter-icon.png" alt="Photo 7" />
                <img src="icons/internet-icon.png" alt="Photo 8" />
                <img src="icons/internet-icon.png" alt="Photo 9" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div className="modal fade" id="album2Modal" tabIndex="-1" aria-labelledby="album2ModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="album2ModalLabel">Shazam - Video Album</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="photo-grid">
                <video controls className="w-100 mb-3">
                  <source src="sample vids/sample1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video controls className="w-100 mb-3">
                  <source src="sample vids/sample2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video controls className="w-100 mb-3">
                  <source src="sample vids/sample3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Gallery;
