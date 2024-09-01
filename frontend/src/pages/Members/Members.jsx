import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { members_list } from '../../assets/assets';

const Members = () => {
    const [selectedYear, setSelectedYear] = useState('2023');

    const handleYearClick = (year) => {
        setSelectedYear(year);
    };

    const filteredMembers = members_list.alumni.filter(member => member.year === selectedYear);

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
                        {['2023', '2022', '2021', '2020'].map(year => (
                            <a
                                key={year}
                                className={`nav-link ${selectedYear === year ? 'active' : ''}`}
                                href={`#${year}`}
                                onClick={() => handleYearClick(year)}
                            >
                                {year}
                            </a>
                        ))}
                    </nav>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div id={selectedYear} className="mt-5">
                        <h2 className="text-center mb-5">Class of {selectedYear}</h2>
                        <div className="row g-4">
                            {filteredMembers.map((member, index) => (
                                <div className="col-md-4 col-lg-3" key={index}>
                                    <div className="card text-center">
                                        <img src={member.image} className="rounded-circle mx-auto mt-3" alt="Member Photo"
                                            style={{ height: '120px', width: '120px' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{member.name}</h5>
                                            <p className="card-text">{member.degree}</p>
                                            <p className="text-muted">{member.year}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Members;