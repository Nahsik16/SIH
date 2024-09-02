import { assets } from "../assets/assets";
import Profile from "../components/Profile/Profile";


const AlumniProfiles = () => {
    const alumniData = {
        profilePic: assets.alumini2,
        name: 'John Doe',
        degree: 'B.Tech in Computer Science',
        year: '2020',
        posts: [
            { content: 'Had a great time at the alumni meet!', date: 'September 1, 2024' },
            { content: 'Excited to announce that I have joined XYZ Company.', date: 'August 15, 2024' },
        ]
    };

    return (
        <div>
            <Profile
                profilePic={alumniData.profilePic}
                name={alumniData.name}
                degree={alumniData.degree}
                year={alumniData.year}
                posts={alumniData.posts}
            />
        </div>
    );
};

export default AlumniProfiles;
