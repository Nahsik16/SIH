import 'bootstrap/dist/css/bootstrap.min.css';

  import { assets } from '../assets/assets';

const AlumniMembers = () => {
    return (
        <div>
            <section className="py-4">
                <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <h1 className="mb-3" style={{ alignSelf: "center" }}>Members</h1>
                    <p className="lead">
                        Explore our esteemed alumni network. Below, you will find members from various graduating classes,
                        showcasing their diverse fields of study and accomplishments. Connect with old classmates and
                        discover new connections within our growing community.
                    </p>
                    <p className="lead"><a href="#" style={{ textDecoration: 'none' }}>Login/SignUp</a> today for adding your name into the list🤩</p>
                </div>
            </section>

            <section className="py-3">
                <div className="container">
                    <nav className="nav nav-pills justify-content-center">
                        <a className="nav-link active" href="#2024">2024</a>
                        <a className="nav-link" href="#2023">2023</a>
                        <a className="nav-link" href="#2022">2022</a>
                        <a className="nav-link" href="#2021">2021</a>
                        <a className="nav-link" href="#2020">2020</a>
                    </nav>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div id="2024">
                        <h2 className="text-center mb-5">Class of 2024</h2>
                        <div className="row g-4">
                            <div className="col-md-4 col-lg-3">
                                <div className="card text-center">
                                    <img src={assets.alumini1} className="rounded-circle mx-auto mt-3" alt="Member Photo"
                                        style={{ height: '120px', width: '120px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">John Doe</h5>
                                        <p className="card-text">Computer Science</p>
                                        <p className="text-muted">2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="card text-center">
                                    <img src={assets.alumini3} className="rounded-circle mx-auto mt-3" alt="Member Photo"
                                        style={{ height: '120px', width: '120px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">John Doe</h5>
                                        <p className="card-text">Computer Science</p>
                                        <p className="text-muted">2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="card text-center">
                                    <img src={assets.alumini2} className="rounded-circle mx-auto mt-3" alt="Member Photo"
                                        style={{ height: '120px', width: '120px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Jane Smith</h5>
                                        <p className="card-text">Mechanical Engineering</p>
                                        <p className="text-muted">2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="2023" className="mt-5">
                        <h2 className="text-center mb-5">Class of 2023</h2>
                        <div className="row g-4">
                            <div className="col-md-4 col-lg-3">
                                <div className="card text-center">
                                    <img src={assets.alumini2} className="rounded-circle mx-auto mt-3" alt="Member Photo"
                                        style={{ height: '120px', width: '120px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Alice Johnson</h5>
                                        <p className="card-text">Electrical Engineering</p>
                                        <p className="text-muted">2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="card text-center">
                                    <img src={assets.alumini2} className="rounded-circle mx-auto mt-3" alt="Member Photo"
                                        style={{ height: '120px', width: '120px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Bob Brown</h5>
                                        <p className="card-text">Civil Engineering</p>
                                        <p className="text-muted">2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="2022" className="mt-5">
                        <h2 className="text-center mb-5">Class of 2022</h2>
                        <div className="row g-4">
                            <div className="col-md-4 col-lg-3">
                                <div className="card text-center">
                                    <img src={assets.alumini3} className="rounded-circle mx-auto mt-3" alt="Member Photo"
                                        style={{ height: '120px', width: '120px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Monk Gonk</h5>
                                        <p className="card-text">Chemical Engineering</p>
                                        <p className="text-muted">2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="card text-center">
                                    <img src={assets.alumini3} className="rounded-circle mx-auto mt-3" alt="Member Photo"
                                        style={{ height: '120px', width: '120px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Missy Tone</h5>
                                        <p className="card-text">Computer Engineering</p>
                                        <p className="text-muted">2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <div className="card text-center">
                                    <img src={assets.alumini6} className="rounded-circle mx-auto mt-3" alt="Member Photo"
                                        style={{ height: '120px', width: '120px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">Monk Gonk</h5>
                                        <p className="card-text">Chemical Engineering</p>
                                        <p className="text-muted">2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-3">
                <div className="container text-center">
                    <a href="https://website.com" className="btn me-3">
                        <img src={assets.alumini1} alt="Website" style={{ height: '20px', verticalAlign: 'middle' }} />
                        University Website
                    </a>
                    <a href="https://instagram.com" className="btn me-3">
                        <img src={assets.alumini2} alt="Instagram" style={{ height: '20px', verticalAlign: 'middle' }} />
                        Instagram
                    </a>
                    <a href="https://facebook.com" className="btn">
                        <img src={assets.alumini3} alt="Facebook" style={{ height: '20px', verticalAlign: 'middle' }} />
                        Facebook
                    </a>
                </div>
            </section>

            <footer className="bg-dark text-white py-3 mt-4">
                <div className="container text-center">
                    <p className="mb-0">Designed by MPR</p>
                </div>
            </footer>
        </div>
    );
};

export default AlumniMembers;
