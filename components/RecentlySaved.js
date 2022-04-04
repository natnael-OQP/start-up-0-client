import React from 'react'
import SavedPost from './SavedPost'

const SavedPosts = [
    {
        id: 1,
        profilePic: '/amir.jpeg',
        name: 'John Don',
        title: '9 Visual Studio Code Extensions That Make Programming Easier. ',
        createdAt: 'Des 9,2021',
    },
    {
        id: 2,
        profilePic: '/profile.jpeg',
        name: 'amir flutter',
        title: '19 Powerful React Libraries and Frameworks to Use Right Now',
        createdAt: 'Des 9,2021',
    },
]

const RecentlySaved = () => {
    return (
        <div className="mt-10">
            <h3 className="pb-3 text-base font-semibold font-lato text-dark">
                Recently saved
            </h3>
            {SavedPosts.map((post) => (
                <SavedPost
                    key={post.id}
                    name={post.name}
                    profilePic={post.profilePic}
                    title={post.title}
                    createdAt={post.createdAt}
                />
            ))}
            <h5 className="mt-6 ml-1 text-[#7bb42f] text-sm font-semibold cursor-pointer ">
                See all ({SavedPosts.length})
            </h5>
        </div>
    )
}

export default RecentlySaved
