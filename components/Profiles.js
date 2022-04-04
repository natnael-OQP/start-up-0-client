import Profile from './Profile'

const users = [
    {
        profilePic: '/profile.jpeg',
        name: 'amir',
        bio: 'ethiopian web developer, yet not writing spaghetti code. On the other hand,',
    },
    {
        profilePic: '/profile.jpeg',
        name: 'John',
        bio: 'Hey! I’m Thomas, a french guy living in Stockholm. Fullstack JavaScript developer, I write about programming and developer’s lifestyle.',
    },
]

const Profiles = () => {
    return (
        <div className="mt-4">
            <h3 className="mb-6 text-sm font-semibold text-dark font-lato">
                Who to follow
            </h3>
            <div>
                {users.map((user) => (
                    <Profile
                        key={user.name}
                        profilePic={user.profilePic}
                        bio={user.bio}
                        name={user.name}
                    />
                ))}
            </div>
            <h5 className="mt-7 ml-1 text-[#7bb42f] text-sm font-semibold cursor-pointer">
                See more suggestions
            </h5>
        </div>
    )
}

export default Profiles
