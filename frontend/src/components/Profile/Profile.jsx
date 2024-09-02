/* eslint-disable react/prop-types */

const Profile = ({ profilePic, name, degree, year, posts }) => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img
                    src={profilePic}
                    alt={`${name}'s profile`}
                    style={{ width: '150px', height: '150px', borderRadius: '50%', marginRight: '20px' }}
                />
                <div>
                    <h2>{name}</h2>
                    <p><strong>Degree:</strong> {degree}</p>
                    <p><strong>Graduation Year:</strong> {year}</p>
                </div>
            </div>

            <hr />

            <div>
                <h3>Posts</h3>
                {posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div key={index} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px' }}>
                            <p>{post.content}</p>
                            <small>{post.date}</small>
                        </div>
                    ))
                ) : (
                    <p>No posts available.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
